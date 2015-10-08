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

CampaignQuery.prototype.toObject = function(key, operator) {
	var query = JSON.parse(this.query);

	var obj = {};

	_.each(query, function(q) {
		// check what type of query
		if (q[0] == 'where') {
			// its a subquery!
			if (q[1] instanceof Array) {
			}
			else {
				// get only last name
				var name = q[1].split('.');
				name = name[name.length - 1];

				var value = q[3];

				if (q[2] == '>=') {
					value = { gt : q[3] };
				}
				else if (q[2] == '<=') {
					value = { lt : q[3] };
				}

				// if already assigned, convert to array
				if (obj[name]) {
					if (value instanceof Object) {
						if (value.gt != null) {
							obj[name]['gt'] = value.gt;
						}
						else {
							obj[name]['lt'] = value.lt;
						}
					}
					else {
						var arr = [];
						arr.push(obj[name]);
						arr.push(value);
						obj[name] = arr;
					}
				}
				// if not, assign directly
				else {
					obj[name] = value;
				}
			}
		}
	});

	return obj;
}


CampaignQuery.relationship = [
	'data:campaign_queries'
];

module.exports = CampaignQuery;
