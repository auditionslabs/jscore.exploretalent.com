'use strict';

var _ = require('lodash'),
	conversations = {},
	Conversation = require('./conversation.js');

conversations.relationship = Conversation.relationship;

conversations.create = function(array) {
	return _.map(array || [], function(item) {
		return new Conversation(item);
	});
};

module.exports = conversations;
