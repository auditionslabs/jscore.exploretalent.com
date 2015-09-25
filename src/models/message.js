'use strict';

var _ = require('lodash');

function Message(data) {
	_.extend(this, data);
}

Message.prototype.from = function() {
	return _.first(_.where(this.users, { id : this.user_id }));
};

Message.prototype.to = function() {
	var user_id = this.user_id;
	return _.first(_.filter(this.users, function(n) { return n.id != user_id }));
}

Message.prototype.getOtherUser = function() {
	if (this.owner) {
		var owner = this.owner;
		return _.first(_.filter(this.users, function(n) { return n.id != owner.id }));
	}
}

Message.relationship = [
	'user',
	'users',
	'data:messages'
];

module.exports = Message;
