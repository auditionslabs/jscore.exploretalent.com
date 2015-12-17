'use strict';

var _ = require('lodash'),
	message_templates = {};

message_templates.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('message_template', item);
	});
};

module.exports = message_templates;
