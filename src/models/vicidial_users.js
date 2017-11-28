'use strict'

var _ = require('lodash'),
	vicidial_userss = {}

vicidial_userss.create = function(array) {
	var modelify = require('src/services/model.js')

	return _.map(array || [], function(item) {
		return modelify('vicidial_user', item)
	})
}

module.exports = vicidial_userss
