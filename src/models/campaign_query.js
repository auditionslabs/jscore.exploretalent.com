'use strict';

var _ = require('lodash');

function CampaignQuery(data) {
	_.extend(this, data || {});
}

CampaignQuery.relationship = [
	'data:campaign_queries'
];

module.exports = CampaignQuery;
