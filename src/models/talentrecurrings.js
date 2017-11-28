'use strict'

var _ = require('lodash'),
	talentrecurrings = {}

talentrecurrings.create = function(array) {
	var modelify = require('src/services/model.js')

	return _.map(array || [], function(item) {
		return modelify('talentrecurring', item)
	})
}

module.exports = talentrecurrings
