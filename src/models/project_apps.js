'use strict'

let _ = require('lodash'),
  project_apps = {}

project_apps.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('project_app', item)
  })
}

module.exports = project_apps
