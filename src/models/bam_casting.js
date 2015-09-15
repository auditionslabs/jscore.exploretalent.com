'use strict';

var _ = require('lodash');

function Casting(data) {
	_.extend(this, data);
}

Casting.prototype.getCategory = function() {
}

Casting.relationship = [
	'data:bam_castings'
];

module.exports = Casting;
