'use strict'

let _ = require('lodash'),
  campaign_app_queues = {}

campaign_app_queues.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('campaign_app_queue', item)
  })
}

module.exports = campaign_app_queues
