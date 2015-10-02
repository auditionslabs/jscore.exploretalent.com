'use strict';

var _ = require('lodash'),
	templates = {},
	CampaignTemplate = require('src/models/campaign_template.js');

templates.relationship = CampaignTemplate.relationship;

templates.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('campaign_template', item);
	});
};

module.exports = templates;
