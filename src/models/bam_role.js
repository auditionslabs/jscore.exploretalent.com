'use strict';

var _ = require('lodash');

function Role(data) {
	_.extend(this, data);
}

Role.prototype.convertToFullDate = function() {
	var date = new Date(parseInt(this.bam_casting.asap) * 1000);
	var convertedDate = date.getDate() + date.getMonth() + date.getFullYear();
	return convertedDate;
};

Role.relationship = [
	'data:bam_roles'
];

module.exports = Role;
