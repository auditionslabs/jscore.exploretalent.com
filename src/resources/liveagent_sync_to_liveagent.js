'use strict'

let api = require('src/config/api.js'),
  Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/liveagent/sync_to_liveagent/:talentnum', {
  model: 'liveagent_sync_to_liveagent'
})
