'use strict';

var _ = require('lodash'),
	quickposts = {};

quickposts.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('quickpost', item);
	});

};

module.exports = quickposts;
