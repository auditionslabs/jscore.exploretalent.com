'use strict'

var api = require('src/config/api.js'),
	Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/castings_call_logs/:castingId', {
	model: 'castings_call_log'
})
