'use strict'

let _ = require('lodash')

function ViciLogs (data) {
  _.extend(this, data || {})
}

ViciLogs.relationship = [
  'data:vicidial_logs'
]

module.exports = ViciLogs
