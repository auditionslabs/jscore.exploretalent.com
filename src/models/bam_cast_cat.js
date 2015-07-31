'use strict';

var _ = require('lodash'),
	converter = require('../services/converter.js'),
	date = require('../services/date.js');

function CastCat(data) {
	_.extend(this, data);
}

CastCat.relationship = [
	'bam_talentci'
];

module.exports = CastCat;
