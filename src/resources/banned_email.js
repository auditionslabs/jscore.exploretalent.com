'use strict'

var api = require('src/config/api.js'),
	Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/banned_contacts/:bannedEmailId', {
	model: 'banned_email'
})