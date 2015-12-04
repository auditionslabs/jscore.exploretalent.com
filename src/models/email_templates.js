'use strict';

var _ = require('lodash'),
	email_templates = {};

email_templates.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('email_template', item);
	});
};

module.exports = email_templates;
