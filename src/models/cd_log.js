'use strict'

var _ = require('lodash')

function CDLogs(data) {
	_.extend(this, data)
}

CDLogs.relationship = [
	'data:cd_logs'
]
module.exports = CDLogs
