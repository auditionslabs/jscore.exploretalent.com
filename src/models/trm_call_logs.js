'use strict';

var _ = require('lodash'),
	trm_call_logs = {},
	TrmCallLog = require('src/models/trm_call_log.js');

trm_call_logs.relationship = TrmCallLog.relationship;

trm_call_logs.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('trm_call_log', item);
	});
};

module.exports = trm_call_logs;