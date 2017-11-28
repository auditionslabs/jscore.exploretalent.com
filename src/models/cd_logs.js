'use strict'

let _ = require('lodash'),
  cdLogs = {}

cdLogs.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('cd_log', item)
  })
}

module.exports = cdLogs
