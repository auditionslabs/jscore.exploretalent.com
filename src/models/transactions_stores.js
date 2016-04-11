'use strict';

var _ = require('lodash'),
	transactions_stores = {};

transactions_stores.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('transactions_store', item);
	});
};

module.exports = transactions_stores;
