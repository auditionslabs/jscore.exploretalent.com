'use strict';

var _ = require('lodash');

function Casting(data) {
	_.extend(this, data);
}

Casting.relationship = [
	'data:bam_roles'
];

module.exports = Casting;
