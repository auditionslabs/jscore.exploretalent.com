'use strict';

var _ = require('lodash'),
	user_options = {};

user_options.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('user_option', item);
	});
};
