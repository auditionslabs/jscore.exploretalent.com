'use strict'

let _ = require('lodash')

function RecordingLogs (data) {
  _.extend(this, data || {})
}

RecordingLogs.relationship = [
  'data:recording_logs'
]

module.exports = RecordingLogs
