'use strict';

var _ = require('lodash');

function Campaign(data) {
	_.extend(this, data || {});
}

Campaign.relationship = [
	'campaign_query',
	'data:campaigns'
];

module.exports = Campaign;
