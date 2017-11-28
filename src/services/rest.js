'use strict'
let $ = require('jquery'), _ = require('lodash'), api = require('src/config/api.js'),
  REST = {}

// set up ajax to use cross domain
$.ajaxSetup({
  xhrFields: {
    withCredentials: true
  },
  crossDomain: true
})

REST.interceptor = {
  request: _.identity,
  response: _.identity,
  responseSuccess: _.identity,
  responseError: _.identity
}

REST.settings = {
}

if (localStorage.getItem('access_token')) {
  REST.settings.headers = {
    Authorization: 'Bearer ' + localStorage.getItem('access_token')
  }
}

REST.$$runInterceptors = runInterceptors
REST.$$restMethod = restMethod

function runInterceptors (interceptors, data, name, context) {
  data = (_.isArray(data) || _.isArguments(data)) ? data : [data]
  return _.reduce(interceptors, function (newData, interceptor) {
    let fn = (interceptor[name] || _.identity)
    return fn.apply(context, data)
  }, data)
}

function restMethod (object, method) {
  object[method] = function (url, data, settings) {
    let promise, config, interceptors

    settings = _.clone(settings || {})

    config = {
      url: url,
      type: method,
      data: data
    }

    if (settings.interceptors) {
      interceptors = settings.interceptors
      delete settings.interceptors
    } else {
      interceptors = [ REST.interceptor ]
    }

    // replaced line below to foreach
    // interceptors = interceptors.concat(REST.interceptors)
    _(interceptors).forEach(function (interceptor) {
      _.assign(interceptor, REST.interceptor)
    }, interceptors)

    config = _.assign(config, settings, REST.settings)

    config = runInterceptors(interceptors, config, 'request', this)

    promise = $.when()

    // check aouth expiry
    if (localStorage.getItem('access_token') && localStorage.getItem('refresh_token') && localStorage.getItem('expires_on')) {
      let expires_on = parseInt(localStorage.getItem('expires_on'))
      let now = Math.round(new Date().getTime() / 1000)

      let diff = expires_on - now

      // Check if expired
      if (diff < 1) {
        promise = $.ajax({
          url: api.base.replace('/v1', '') + '/oauth/access_token',
          method: 'POST',
          data: {
            refresh_token: localStorage.getItem('refresh_token'),
            client_secret: api.client_secret,
            client_id: api.client_id,
            user_type: api.type == '/talent' ? 'bam_talentci' : (api.type == '/cd' ? 'bam_cd_user' : 'bam_user'),
            grant_type: 'refresh_token'
          }
        })
      }
    }

    return promise.then(function (res) {
      if (res && res.access_token) {
        localStorage.setItem('access_token', res.access_token)
        localStorage.setItem('refresh_token', res.refresh_token)
        localStorage.setItem('expires_on', Math.round(new Date().getTime() / 1000) + parseInt(res.expires_in))

        config.headers = {
          Authorization: 'Bearer ' + localStorage.getItem('access_token')
        }

        REST.settings.headers = {
          Authorization: 'Bearer ' + localStorage.getItem('access_token')
        }
      }

      let promise2 = $.ajax(config).then(function () {
        return runInterceptors(interceptors, arguments, 'responseSuccess', this)
      }, function () {
        return runInterceptors(interceptors, arguments, 'responseError', this)
      })

      promise2.always(function () {
        runInterceptors(interceptors, arguments, 'response', this)
      })

      return promise2
    })
  }

  return object
}

REST.$$methods = [ 'put', 'patch', 'delete', 'get', 'post' ]

REST = _.reduce(REST.$$methods, restMethod, REST)

module.exports = REST
