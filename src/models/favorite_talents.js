'use strict';

var _ = require('lodash'),
	favorite_talents = {},
	Favorite_talent = require('./favorite_talent.js');

favorite_talents.relationship = Favorite_talent.relationship;

favorite_talents.create = function(array) {
	var modelify = require('../services/model.js');

	return _.map(array || [], function(item) {
		return modelify('favorite_talent', item);
	});
};

module.exports = favorite_talents;