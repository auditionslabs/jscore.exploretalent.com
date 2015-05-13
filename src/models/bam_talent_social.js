'use strict';

var _ = require('lodash');

function TalentSocial(data) {
	_.extend(this, data || {});
}

TalentSocial.relationship = [
	'talentnum:bam_talentci',
	'data:bam_talent_socials'
];

module.exports = TalentSocial;
