'use strict'

let _ = require('lodash'),
  user_apps = {}

user_apps.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('user_app', item)
  })
}

module.exports = user_apps
