'use strict'

var api = require('src/config/api.js'),
  Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/vicidial/closer_logs', {
  model: 'vicidial_closer_log'
})
