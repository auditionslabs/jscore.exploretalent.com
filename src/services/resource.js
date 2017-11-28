'use strict'

let REST = require('src/services/rest.js'),
  model = require('src/services/model.js'),
  _ = require('lodash')

function Resource (url, settings) {
  let self = this
  self.$$url = url
  self.$$settings = settings || {}
  self.$$keys = url.replace(/.*:\/\//g, '').match(/:[a-zA-Z]+/g)
}

Resource.prototype.interpolate = function (data) {
  let self = this
  data = _.clone(data)
  return {
    url: _(self.$$keys).reduce(function (url, key) {
      let dataKey = key.substring(1)
      if (data && data[dataKey]) {
        url = url.replace(key, data[dataKey])
        delete data[dataKey]
      } else {
        url = url.replace(key, '')
      }
      return url.replace(/\/$/, '')
    }, self.$$url),
    data: data
  }
}

Resource.prototype.child = function (url, settings) {
  return new Resource(this.$$url + url, settings)
}

_.each(REST.$$methods, function (method) {
  Resource.prototype[method] = function (data, settings) {
    let self = this,
      params = self.interpolate(data),
      newSettings = _.assign({}, settings, self.$$settings)

    if (newSettings.model) {
      // changed interceptors to interceptor
      newSettings.interceptors = [{
        responseSuccess: _.partial(model, newSettings.model)
      }]
      delete newSettings.model
    }

    // Check if we are doing a GET request
    if (method.toUpperCase() == 'GET') {
      // Check if we have a query or q?
      if (typeof params.data.query !== 'undefined') {
        // CLONE to be safe
        params.data.q = _.clone(params.data.query)

        // Remove the old reference
        delete params.data.query
      }

      // Check for the old query format
      if (typeof params.data.q !== 'undefined') {
        // Check if we have a string/json already
        if (typeof params.data.q !== 'string') {
          params.data.q = JSON.stringify(params.data.q)
        }
      }
    }

    return REST[method](params.url, params.data, newSettings)
  }
})

module.exports = Resource
