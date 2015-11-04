'use strict';

var _ = require('lodash');

function TrmScriptCategory(data) {
	_.extend(this, data || {});
}

TrmScriptCategory.relationship = [
	'data:trm_script_categories'
];

module.exports = TrmScriptCategory;
