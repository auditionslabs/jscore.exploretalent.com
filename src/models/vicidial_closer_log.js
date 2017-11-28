'use strict'

var _ = require('lodash')

function CloserLog(data) {
	_.extend(this, data || {})
}

CloserLog.relationship = [
	'data:vicidial_closer_logs'
]

module.exports = CloserLog
