'use strict';

var _ = require('lodash'),
	vicidial_closer_logs = {};

vicidial_closer_logs.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('vicidial_closer_log', item);
	});
};

module.exports = vicidial_closer_logs;
