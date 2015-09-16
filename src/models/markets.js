var _ = require('lodash'),
	markets = {},
	Market = require('./market.js');

markets.relationship = Market.relationship;

markets.create = function(array) {
	var modelify = require('../services/model.js');

	return _.map(array || [], function(item) {
		return modelify('market', item);
	});
};

module.exports = markets;
