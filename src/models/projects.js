'use strict'

var _ = require('lodash'),
  projects = {},
  Project = require('src/models/project.js')

projects.relationship = Project.relationship

projects.create = function(array) {
  var modelify = require('src/services/model.js')

  return _.map(array || [], function(item) {
    return modelify('project', item)
  })
}

module.exports = projects
