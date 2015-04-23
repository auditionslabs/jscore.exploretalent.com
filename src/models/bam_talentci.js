'use strict';

var _ = require('lodash'),
	talent = require('../services/talent.js');

function Talent(data) {
	_.extend(this, data || {});
}

Talent.prototype.getFullName = function() {
	return talent.getFullName(this.fname, this.lname);
};

Talent.relationship = [
	'user',
	'bam_talentrecurring',
	'bam_talenttracking',
	'bam_talentinfo1',
	'bam_talentinfo2',
	'bam_talentinfo3',
	'bam_talent_resume',
	'bam_talent_music',
	'bam_talent_dance',
	'bam_talent_general'
];

module.exports = Talent;
