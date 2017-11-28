'use strict'

var _ = require('lodash'),
  project_apps = {}

project_apps.create = function(array) {
  var modelify = require('src/services/model.js')

  return _.map(array || [], function(item) {
    return modelify('project_app', item)
  })
}

module.exports = project_apps
