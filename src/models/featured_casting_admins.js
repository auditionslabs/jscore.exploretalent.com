'use strict';

var _ = require('lodash'),
	featured_casting_admins = {},
	FeaturedCastingAdmin = require('src/models/featured_casting_admin.js');

featured_casting_admins.relationship = FeaturedCastingAdmin.relationship;

featured_casting_admins.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('featured_casting', item);
	});
};

module.exports = featured_casting_admins;
