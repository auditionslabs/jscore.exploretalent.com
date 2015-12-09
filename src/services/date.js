'use strict';

var _ = require('lodash');

function toUnixTimeStamp(date) {
	return new Date(date) / 1000;
}

function formatYMD(value) {
	if (isNaN(value)) {
		var date = new Date(value);
	}
	else {
		var date = new Date((value || 0) * 1000 - (7 * 60 * 60)); // set timezone to dev-la (GMT -7)
	}

	if (date == 'Invalid Date') {
		return '';
	}
	else {
		return date.getUTCFullYear() + '-' +
			_.padLeft(date.getUTCMonth() + 1, 2, 0) + '-' +
			_.padLeft(date.getUTCDate(), 2, 0);
	}
}

function calculateAge(year, month, day) {
	var difference = Date.now() - new Date(year, month - 1, day).getTime(),
		fromEpoch = new Date(difference);
	return fromEpoch.getUTCFullYear() - 1970;
}

function now() {
	var date = new Date(Date.now());
	return {
		year: date.getUTCFullYear(),
		month: date.getMonth() + 1,
		day: date.getDate()
	};
}

function formatDateTime(value) {
	if (isNaN(value)) {
		var date = new Date(value);
	}
	else {
		var date = new Date((value || 0) * 1000 - (7 * 60 * 60)); // set timezone to dev-la (GMT -7)
	}

	if (date == 'Invalid Date') {
		return '';
	}
	else {
		return date.getUTCFullYear() + '-' +
			_.padLeft(date.getUTCMonth() + 1, 2, 0) + '-' +
			_.padLeft(date.getUTCDate(), 2, 0) + ' ' +
			_.padLeft((date.getUTCHours() > 12 ? date.getUTCHours() - 12 : date.getUTCHours()), 2, 0) + ':' +
			_.padLeft(date.getUTCMinutes(), 2, 0) + ' ' +
			(date.getUTCHours() < 12 ? 'AM' : 'PM');
	}
}

module.exports = {
	toUnixTimeStamp: toUnixTimeStamp,
	formatYMD: formatYMD,
	formatDateTime: formatDateTime,
	calculateAge: calculateAge,
	now: now
};
