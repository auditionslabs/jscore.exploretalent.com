'use strict';

var _ = require('lodash');

function toUnixTimeStamp(date) {
	return new Date(date) / 1000;
}

function formatYMD(unixTimeStamp) {
	var date = new Date(+(unixTimeStamp || 0) * 1000);
	return date.getUTCFullYear() + '-' +
		_.padLeft(date.getUTCMonth() + 1, 2, 0) + '-' +
		_.padLeft(date.getDate(), 2, 0);
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

module.exports = {
	toUnixTimeStamp: toUnixTimeStamp,
	formatYMD: formatYMD,
	calculateAge: calculateAge,
	now: now
};
