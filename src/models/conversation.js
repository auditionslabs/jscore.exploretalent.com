'use strict';

var _ = require('lodash');

function Conversation(data) {
	_.extend(this, data || {});
}

Conversation.prototype.from = function() {
	return _.first(_.where(this.users, { id : this.user_id }));
};

Conversation.prototype.to = function() {
	var user_id = this.user_id;
	return _.first(_.filter(this.users, function(n) { return n.id != user_id }));
}

Conversation.relationship = [
	'user',
	'users',
	'data:conversations'
];

module.exports = Conversation;
