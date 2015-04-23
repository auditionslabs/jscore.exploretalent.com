'use strict';

var _ = require('lodash'),
	schedules = {},
	Schedule = require('./schedule.js');

schedules.relationship = Schedule.relationship;

schedules.create = function(array) {
	return _.map(array || [], function(item) {
		return new Schedule(item);
	});
};

module.exports = schedules;
