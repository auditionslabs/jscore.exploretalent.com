'use strict'

let _ = require('lodash')

function AgentLead (data) {
  _.extend(this, data || {})
}

module.exports = AgentLead
