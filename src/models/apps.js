'use strict'

var _ = require('lodash'),
  apps = {},
  App = require('src/models/app.js')

apps.relationship = App.relationship

apps.create = function(array) {
  var modelify = require('src/services/model.js')

  return _.map(array || [], function(item) {
    return modelify('app', item)
  })
}

module.exports = apps
