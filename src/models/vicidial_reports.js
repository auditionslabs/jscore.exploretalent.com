'use strict'

var _ = require('lodash'),
	vicidial_reportss = {}

vicidial_reportss.create = function(array) {
	var modelify = require('src/services/model.js')

	return _.map(array || [], function(item) {
		return modelify('vicidial_report', item)
	})
}

module.exports = vicidial_reportss
