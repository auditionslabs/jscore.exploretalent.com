'use strict'

let _ = require('lodash'),
  campaign_app_logs = {}

campaign_app_logs.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('campaign_app_log', item)
  })
}

module.exports = campaign_app_logs
