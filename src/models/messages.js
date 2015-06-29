var _ = require('lodash'),
	messages = {},
	Message = require('./message.js');

messages.relationship = Message.relationship;

messages.create = function(array) {
	return _.map(array || [], function(item) {
		return new Message(item);
	});
};

module.exports = messages;
