'use strict'

var _ = require('lodash'),
	user_apps = {}

user_apps.create = function(array) {
	var modelify = require('src/services/model.js')

	return _.map(array || [], function(item) {
		return modelify('user_app', item)
	})
}

module.exports = user_apps
