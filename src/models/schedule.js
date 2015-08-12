'use strict';

var _ = require('lodash');

function Schedule(data) {
	_.extend(this, data);
}

Schedule.relationship = [
	'invitee:user',
	'inviter:user',
	'bam_role',
	//if using GET from api, result is in the data property, set model to array of bam_talentcis
	'data:schedules'
];

module.exports = Schedule;
