'use strict';

var _ = require('lodash');

function Message(data) {
	_.extend(this, data);
}

Message.relationship = [
];

module.exports = Message;
