'use strict'

var api = require('src/config/api.js'),
  Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/featured_castings/:castingId', {
  model: 'featured_casting'
})
