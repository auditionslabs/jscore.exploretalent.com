'use strict';

var _ = require('lodash');

function CampaignQuery(data) {
	_.extend(this, data || {});
}

CampaignQuery.prototype.hasQuery = function(key) {
	var query = JSON.parse(this.query);

	return _.find(query.wheres, function(q) {
		return q[2] == key;
	});
}

CampaignQuery.relationship = [
	'data:campaign_queries'
];

module.exports = CampaignQuery;
