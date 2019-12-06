'use strict'

let _ = require('lodash'),
  AgentLeads = {},
  AgentLead = require('src/models/agent_lead.js')

AgentLeads.relationship = AgentLead.relationship

AgentLeads.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('agent_lead', item)
  })
}

module.exports = AgentLeads
