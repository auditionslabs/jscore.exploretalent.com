'use strict'

let api = require('src/config/api.js'),
  Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/v1/admin/link_campaigns/:id', {
  model: 'link_campaign'
})
