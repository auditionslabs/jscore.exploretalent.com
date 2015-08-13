'use strict';

var _ = require('lodash'),
	date = require('../services/date.js');

function Schedule(data) {
	_.extend(this, data);
}

Schedule.prototype.convertToFullDate = function(timestamp) {
	return date.formatYMD(parseInt(timestamp));
};

Schedule.relationship = [
	'invitee:user',
	'inviter:user',
	'bam_role',
	//if using GET from api, result is in the data property, set model to array of bam_talentcis
	'data:schedules'
];

module.exports = Schedule;
