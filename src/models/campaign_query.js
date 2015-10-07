'use strict';

var _ = require('lodash');

function CampaignQuery(data) {
	_.extend(this, data || {});
}

CampaignQuery.prototype.hasQuery = function(key, type) {
	var query = JSON.parse(this.query);

	return _.find(query, function(q) {
		if (q[0] == 'where') {
			if (q[1] instanceof Array) {
				var found = false;

				_.each(q[1], function(subq) {
					found = found || (subq[1] == key);
				});

				return found;
			}
			else {
				if (type == 'min')
					return q[1] == key && q[2] == '>=';
				else if (type == 'max')
					return q[1] == key && q[2] == '<=';
				else
					return q[1] == key;
			}
		}
		else if (q[0] == 'whereHas') {
			return q[2][1] == key;
		}
	});
}

CampaignQuery.relationship = [
	'data:campaign_queries'
];

module.exports = CampaignQuery;
