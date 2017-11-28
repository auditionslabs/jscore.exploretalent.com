'use strict'

var _ = require('lodash'),
	talentordertrackings = {}

talentordertrackings.create = function(array) {
	var modelify = require('src/services/model.js')

	return _.map(array || [], function(item) {
		return modelify('talentordertracking', item)
	})
}

module.exports = talentordertrackings
