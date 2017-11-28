'use strict'

var api = require('src/config/api.js'),
	Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/user_campaign_subscriptions/:id', {
	model: 'cd_user_campaign_subscription'
})
