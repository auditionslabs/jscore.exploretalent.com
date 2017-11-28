'use strict'

var _ = require('lodash'),
	promocodes = {}

promocodes.create = function(array) {
	var modelify = require('src/services/model.js')

	return _.map(array || [], function(item) {
		return modelify('promocode', item)
	})
}

module.exports = promocodes
