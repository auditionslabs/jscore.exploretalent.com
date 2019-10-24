'use strict'

let _ = require('lodash'),
  vicidial_logs = {}

vicidial_logs.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('vicidial_log', item)
  })
}

module.exports = vicidial_logs
