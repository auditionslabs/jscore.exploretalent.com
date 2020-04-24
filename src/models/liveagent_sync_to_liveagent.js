'use strict'

let _ = require('lodash')

function LiveagnetSyncToLiveagent (data) {
  _.extend(this, data || {})
}

module.exports = LiveagnetSyncToLiveagent
