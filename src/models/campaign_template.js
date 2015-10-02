'use strict';

var _ = require('lodash');

function CampaignTemplate(data) {
	_.extend(this, data || {});
}

CampaignTemplate.relationship = [
	'campaign',
	'data:campaign_templates'
];

module.exports = CampaignTemplate;
