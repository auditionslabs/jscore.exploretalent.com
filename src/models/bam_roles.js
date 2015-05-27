'use strict';

var _ = require('lodash'),
	roles = {},
	Role = require('./bam_role.js');

roles.relationship = Role.relationship;

roles.create = function(array) {
	return _.map(array || [], function(item) {
		return new Role(item);
	});
};

module.exports = roles;
