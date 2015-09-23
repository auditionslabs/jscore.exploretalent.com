'use strict';

var _ = require('lodash'),
	schedules = {},
	Schedule = require('src/models/schedule.js');

schedules.relationship = Schedule.relationship;

schedules.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('schedule', item);
	});
};

module.exports = schedules;
