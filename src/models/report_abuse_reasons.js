'use strict';

var _ = require('lodash'),
	models = {};

models.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('report_abuse_reason', item);
	});
};

module.exports = models;
