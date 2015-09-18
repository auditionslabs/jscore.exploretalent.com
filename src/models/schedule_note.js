'use strict';

var _ = require('lodash');

function ScheduleNote(data) {
	_.extend(this, data);
}

ScheduleNote.relationship = [
	'data:schedule_notes'
];

module.exports = Schedule;
