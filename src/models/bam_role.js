'use strict';

var _ = require('lodash'),
	date = require('../date.js');

function Role(data) {
	_.extend(this, data);
}

Role.prototype.convertToFullDate = function() {
	return date.formatYMD(parseInt(bam_casting.asap));
};

Role.relationship = [
	'data:bam_roles'
];

module.exports = Role;
