'use strict';

var _ = require('lodash'),
	date = require('../services/date.js');

function Project(data) {
	_.extend(this, data);
}

Schedule.prototype.convertToFullDate = function(timestamp) {
	return date.formatYMD(parseInt(timestamp));
};

module.exports = Project;
