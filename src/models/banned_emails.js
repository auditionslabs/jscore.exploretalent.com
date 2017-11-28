'use strict'

var _ = require('lodash'),
	banned_emails = {}

banned_emails.create = function(array) {
	var modelify = require('src/services/model.js')

	return _.map(array || [], function(item) {
		return modelify('banned_email', item)
	})
}

module.exports = banned_emails