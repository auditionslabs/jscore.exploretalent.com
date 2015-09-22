'use strict';

var _ = require('lodash'),
	favorites = {},
	Favorite = require('./favorite_talent.js');

favorites.relationship = Favorite.relationship;

favorites.create = function(array) {
	var modelify = require('../services/model.js');

	return _.map(array || [], function(item) {
		return modelify('schedule', item);
	});
};

module.exports = favorites;