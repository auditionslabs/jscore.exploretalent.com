'use strict';

var _ = require('lodash');

function Role(data) {
	_.extend(this, data);
}

Role.prototype.convertToFullDate = function() {
	var date = new Date(int.parse(this.bam_casting.asap) * 1000);
	var convertedDate = date.getDate() + date.getMonth() + date.getFullYear();
	return convertedDate;
};

Talent.relationship = [
	'data:bam_roles'
];

module.exports = Role;
