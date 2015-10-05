'use strict';

var _ = require('lodash'),
	campaign_senders = {},
	CampaignSender = require('src/models/campaign_sender.js');

campaign_senders.relationship = CampaignSender.relationship;

campaign_senders.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('campaign_sender', item);
	});
};

module.exports = campaign_senders;
