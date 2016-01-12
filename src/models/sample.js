'use strict';

var _ = require('lodash');

function <%= toTitleCase(resource) %>(data) {
	_.extend(this, data || {});
}

<%= toTitleCase(resource) %>.relationship = [
	'data:<%= model %>s'
];

module.exports = <%= toTitleCase(resource) %>;
