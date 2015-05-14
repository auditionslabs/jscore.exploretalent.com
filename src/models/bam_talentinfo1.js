'use strict';

var _ = require('lodash'),
	converter = require('../services/converter.js'),
	date = require('../services/date.js');

function TalentInfo1(data) {
	_.extend(this, data);
}

TalentInfo1.relationship = [
	'bam_talentci'
];

module.exports = TalentInfo1;
