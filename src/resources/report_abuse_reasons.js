'use strict'

let api = require('src/config/api.js'),
  Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/report_abuse_reasons/:id', {
  model: 'report_abuse_reason'
})