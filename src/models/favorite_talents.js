'use strict';

var _ = require('lodash'),
	favoriteTalents = {},
	FavoriteTalent = require('./favorite_talent.js');

favoriteTalents.relationship = FavoriteTalent.relationship;

favoriteTalents.create = function(array) {
	var modelify = require('../services/model.js');

	return _.map(array || [], function(item) {
		return modelify('favorite_talent', item);
	});
};

module.exports = favoriteTalents;