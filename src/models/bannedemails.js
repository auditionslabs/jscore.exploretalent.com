'use strict';

var _ = require('lodash'),
	bannedemails = {};

bannedemails.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('bannedemail', item);
	});
};

module.exports = bannedemails;