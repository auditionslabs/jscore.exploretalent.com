'use strict'

var _ = require('lodash'),
	trm_feedbacks = {}

trm_feedbacks.create = function(array) {
	var modelify = require('src/services/model.js')

	return _.map(array || [], function(item) {
		return modelify('trm_feedback', item)
	})
}

module.exports = trm_feedbacks
