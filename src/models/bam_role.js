'use strict';

var _ = require('lodash'),
	date = require('../services/date.js');

function Role(data) {
	_.extend(this, data);
}

Role.prototype.convertToFullDate = function(timestamp) {
	return date.formatYMD(parseInt(timestamp));
};

Role.relationship = [
	'data:bam_roles'
];

module.exports = Role;
