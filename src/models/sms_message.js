'use strict';

var _ = require('lodash');

function SmsMessage(data) {
	_.extend(this, data || {});
}

SmsMessage.relationship = [
	'bam_talentci',
	'bam_user',
	'data:sms_messages'
];

module.exports = SmsMessage;
