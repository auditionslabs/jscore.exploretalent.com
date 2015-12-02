'use strict';

var _ = require('lodash');

function SmsMessage(data) {
	_.extend(this, data || {});
}

SmsMessage.relationship = [
	'data:sms_messages'
];

module.exports = SmsMessage;
