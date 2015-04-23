'use strict';

var _ = require('lodash');

function Schedule(data) {
	_.extend(this, data);
}

Schedule.relationship = [
	'invitee:user',
	'inviter:user',
	'bam_role'
];

module.exports = Schedule;
