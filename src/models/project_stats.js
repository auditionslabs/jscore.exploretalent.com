'use strict'

let _ = require('lodash'),
  project_stats = {}

project_stats.create = function (array) {
  let model = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return model('project_stat', item)
  })
}

module.exports = project_stats
