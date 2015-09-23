'use strict';

var _ = require('lodash'),
	date = require('../services/date.js');

function FavoriteTalent(data) {
	_.extend(this, data);
}

FavoriteTalent.relationship = [
	'user',
	'bam_talentci',
	'bam_talentrecurring',
	'bam_talenttracking',
	'bam_talentinfo1',
	'bam_talentinfo2',
	'bam_talentinfo3',
	'bam_talent_resume',
	'bam_talent_music',
	'bam_talent_dance',
	'bam_talent_general',
	'bam_talent_social:bam_talent_socials',
	//if using GET from api, result is in the data property, set model to array of bam_talentcis
	'data:favorite_talents'
];

module.exports = FavoriteTalent;