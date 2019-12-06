'use strict'

let api = require('src/config/api.js'),
  Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + '/admin/reports/agent_leads/:id', {
  model: 'agent_lead'
})
