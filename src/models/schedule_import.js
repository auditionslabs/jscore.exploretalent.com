'use strict';

var _ = require('lodash'),
	date = require('../services/date.js');

function ScheduleImport(data) {
	_.extend(this, data);
}

module.exports = ScheduleImport;
