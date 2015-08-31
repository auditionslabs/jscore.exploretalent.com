'use strict';

var _ = require('lodash'),
	campaigns = {},
	Campaign = require('./campaign.js');

campaigns.relationship = Campaign.relationship;

campaigns.create = function(array) {
	var modelify = require('../services/model.js');

	return _.map(array || [], function(item) {
		return modelify('campaign', item);
	});
};

module.exports = campaigns;
