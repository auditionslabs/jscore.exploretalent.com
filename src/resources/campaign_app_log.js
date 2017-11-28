'use strict'

var api = require('src/config/api.js'),
	Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/campaign_app_logs', {
	model: 'campaign_app_log'
})
