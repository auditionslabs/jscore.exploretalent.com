'use strict';

var _ = require('lodash');

function Conversation(data) {
	_.extend(this, data || {});
}

Conversation.relationship = [
	'user_id:user',
	'users:users',
	'data:conversations'
];

module.exports = Conversation;
