'use strict';

var _ = require('lodash');

function Contest(data) {
	_.extend(this, data || {});
}

Contest.relationship = [
	'data:contests'
];

module.exports = Contest;
