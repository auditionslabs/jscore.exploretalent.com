'use strict'

var _ = require('lodash'),
	callLogs = {}


callLogs.create = function(array) {
	var modelify = require('src/services/model.js')

	return _.map(array || [], function(item) {
		return modelify('castings_call_log', item)
	})
}

module.exports = callLogs
