'use strict'

let api = require('src/config/api.js'),
  Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/sale_sources_tls/:id', {
  model: 'sale_sources_tls'
})
