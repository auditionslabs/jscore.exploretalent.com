'use strict';

var _ = require('lodash');

function TrmSender(data) {
	_.extend(this, data || {});
}

TrmSender.relationship = [
	'data:trm_sender'
];

module.exports = TrmSender;
