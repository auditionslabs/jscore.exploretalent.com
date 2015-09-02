'use strict';

var _ = require('lodash');

function CampaignQuery(data) {
	_.extend(this, data || {});
}

CampaignQuery.prototype.hasQuery = function(key, type) {
	var query = JSON.parse(this.query);

	return _.find(query.wheres, function(q) {
		if (type == 'min')
			return q[1] == key && q[2] == '>=';
		else if (type == 'max')
			return q[1] == key && q[2] == '<=';
		else
			return q[1] == key;
	});
}

CampaignQuery.relationship = [
	'data:campaign_queries'
];

module.exports = CampaignQuery;
