'use strict'

var _ = require('lodash'),
	date = require('src/services/date.js')

function SmsMessage(data) {
	_.extend(this, data || {})
}

SmsMessage.prototype.getDateTime = function() {
	return date.formatDateTime(parseInt(this.timestamp))
}

SmsMessage.relationship = [
	'bam_talentci',
	'bam_user',
	'data:sms_messages'
]

module.exports = SmsMessage
