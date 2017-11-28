'use strict'

var _ = require('lodash'),
	talentorders = {},
	TalentOrder = require('src/models/talentorder.js')

talentorders.relationship = TalentOrder.relationship

talentorders.create = function(array) {
	var modelify = require('src/services/model.js')

	return _.map(array || [], function(item) {
		return modelify('talentorder', item)
	})
}

module.exports = talentorders
