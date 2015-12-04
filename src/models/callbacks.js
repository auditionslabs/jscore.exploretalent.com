'use strict';

var _ = require('lodash'),
	callbacks = {},
	Callback = require('src/models/callback.js');

callbacks.relationship = Callback.relationship;

trm_call_logs.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('callback', item);
	});
};

module.exports = callbacks;