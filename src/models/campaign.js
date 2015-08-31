'use strict';

var _ = require('lodash');

function Campaign(data) {
	_.extend(this, data || {});
}

Campaign.relationship = [
	'data:campaigns'
];

module.exports = campaigns;
