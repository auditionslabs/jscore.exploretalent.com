'use strict';

var _ = require('lodash'),
	trm_scripts = {},
	TrmScript = require('src/models/trm_script.js');

trm_scripts.relationship = TrmScript.relationship;

trm_scripts.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('trm_script', item);
	});
};

module.exports = trm_scripts;
