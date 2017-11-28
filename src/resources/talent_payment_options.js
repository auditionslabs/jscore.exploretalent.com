'use strict'

var api = require('src/config/api.js'),
	Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/talent_payment_options/:optionId', {
	model: 'talent_payment_option'
})
