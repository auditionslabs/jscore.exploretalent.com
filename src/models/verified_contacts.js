'use strict'

var _ = require('lodash'),
	verified_contacts = {}

verified_contacts.create = function(array) {
	var modelify = require('src/services/model.js')

	return _.map(array || [], function(item) {
		return modelify('verified_contact', item)
	})
}

module.exports = verified_contacts
