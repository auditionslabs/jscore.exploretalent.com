'use strict'

var _ = require('lodash')

function CastingCallLogs(data) {
	_.extend(this, data)
}

CastingCallLogs.relationship = [
	'data:castings_call_logs'
]
module.exports = CastingCallLogs
