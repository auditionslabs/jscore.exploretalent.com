'use strict'

let api = require('src/config/api.js'),
  Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/v1/admin/castings_evils/:id', {
  model: 'castings_evil'
})
