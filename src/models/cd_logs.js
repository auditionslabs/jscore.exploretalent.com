'use strict'

var _ = require('lodash'),
  cdLogs = {}


cdLogs.create = function(array) {
  var modelify = require('src/services/model.js')

  return _.map(array || [], function(item) {
    return modelify('cd_log', item)
  })
}

module.exports = cdLogs
