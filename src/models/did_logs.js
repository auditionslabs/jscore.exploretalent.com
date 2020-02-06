let _ = require('lodash'),
  DidLogs = {},
  DidLog = require('src/models/did_log.js')

DidLogs.relationship = DidLog.relationship

DidLogs.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('did_log', item)
  })
}

module.exports = DidLogs
