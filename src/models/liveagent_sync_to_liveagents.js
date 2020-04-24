'use strict'

let _ = require('lodash'),
  liveagent_sync_to_liveagents = {}

liveagent_sync_to_liveagents.create = function (array) {
  let model = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return model('liveagent_sync_to_liveagent', item)
  })
}

module.exports = liveagent_sync_to_liveagents
