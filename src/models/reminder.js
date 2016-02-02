'use strict';

var _ = require('lodash');

function Reminder(data) {
	_.extend(this, data || {});
}

Reminder.relationship = [
	'data:reminders'
];

module.exports = Reminder;
