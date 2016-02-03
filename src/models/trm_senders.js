'use strict';

var _ = require('lodash'),
	trm_senders = {},
	TrmSender = require('src/models/trm_sender.js');

trm_senders.relationship = TrmSender.relationship;

trm_senders.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('trm_sender', item);
	});
};

module.exports = trm_senders;
