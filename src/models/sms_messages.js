'use strict';

var _ = require('lodash'),
	sms_messages = {};

sms_messages.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('sms_message', item);
	});
};

module.exports = sms_messages;
