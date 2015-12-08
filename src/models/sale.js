'use strict';

var _ = require('lodash');

function Sales(data) {
	_.extend(this, data || {});
}

Sales.relationship = [
	'data:sales'
];

module.exports = Sales;
