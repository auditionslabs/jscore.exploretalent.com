'use strict'

var _ = require('lodash'),
	message_template_categories = {}

message_template_categories.create = function(array) {
	var modelify = require('src/services/model.js')

	return _.map(array || [], function(item) {
		return modelify('message_template_category', item)
	})
}

module.exports = message_template_categories
