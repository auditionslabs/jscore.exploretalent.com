'use strict';

var _ = require('lodash'),
	featured_castings = {},
	FeaturedCasting = require('src/models/featured_casting.js');

featured_castings.relationship = FeaturedCasting.relationship;

featured_castings.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('featured_casting', item);
	});
};

module.exports = featured_castings;
