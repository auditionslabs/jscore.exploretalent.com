'use strict'

let _ = require('lodash'),
  apps = {},
  App = require('src/models/app.js')

apps.relationship = App.relationship

apps.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('app', item)
  })
}

module.exports = apps
