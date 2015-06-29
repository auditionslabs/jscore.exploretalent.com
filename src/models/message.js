'use strict';

var _ = require('lodash');

function Message(data) {
	_.extend(this, data);
}

Message.prototype.from = function() {
	return _.first(_.where(this.users, { id : this.user_id }));
};

Message.prototype.to = function() {
	return _.first(_.filter(this.users, function(n) { return n.id != this.user_id }));
}

Message.relationship = [
];

module.exports = Message;
