'use strict';

var _ = require('lodash'),
	sender_options = {};

sender_options.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('sender_option', item);
	});
};

module.exports = sender_options;
