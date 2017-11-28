'use strict'

var _ = require('lodash'),
	admin_alerts = {}

admin_alerts.create = function(array) {
	var modelify = require('src/services/model.js')

	return _.map(array || [], function(item) {
		return modelify('admin_alert', item)
	})
}

module.exports = admin_alerts
