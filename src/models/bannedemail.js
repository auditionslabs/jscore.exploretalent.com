'use strict';

var _ = require('lodash');

function Bannedemail(data) {
	_.extend(this, data || {});
}

Bannedemail.relationship = [
	'data:bannedemails'
];

module.exports = Bannedemail;