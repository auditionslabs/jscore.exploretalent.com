'use strict';

var _ = require('lodash'),
	date = require('../services/date.js');

function Role(data) {
	_.extend(this, data);
}

Role.prototype.getHeightMinText = function() {
	var feet = Math.floor(this.height_min / 12.00);
	var inches = feet % 12;
	return feet + '"' + inches + "'";
}

Role.prototype.getHeightMaxText = function() {
	var feet = Math.floor(this.height_max / 12.00);
	var inches = feet % 12;
	return feet + '"' + inches + "'";
}

Role.relationship = [
	'data:bam_roles'
];

module.exports = Role;
