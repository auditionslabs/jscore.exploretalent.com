'use strict';

var _ = require('lodash');

function CastingCallLogs(data) {
	_.extend(this, data);
}

CastingCallLogs.relationship = [
	'data:casting_call_logs'
];
module.exports = CastingCallLogs;
