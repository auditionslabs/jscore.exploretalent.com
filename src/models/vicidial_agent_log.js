'use strict'

let _ = require('lodash')

function VicidialAgentLogs (data) {
  _.extend(this, data || {})
}

VicidialAgentLogs.relationship = [
  'data:vicidial_agent_logs'
]

module.exports = VicidialAgentLogs
