'use strict'

let _ = require('lodash'),
  recording_logs = {}

recording_logs.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('recording_log', item)
  })
}

module.exports = recording_logs
