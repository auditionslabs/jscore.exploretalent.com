'use strict';

var _ = require('lodash'),
	talent = require('../services/talent.js'),
	date = require('../services/date.js');

function Talent(data) {
	_.extend(this, data || {});
}

Talent.prototype.getFullName = function() {
	return talent.getFullName(this.fname, this.lname);
};

Talent.prototype.getAge = function() {
	return date.calculateAge(this.bam_talentinfo1.dobyyyy, this.bam_talentinfo1.dobmm, this.bam_talentinfo1.dobdd);
}

Talent.prototype.isPaying = function() {
	return this.bam_talentrecurring ? true : false;
}

Talent.prototype.getPrimaryPhoto = function() {
	var media_path = _.first(_.pluck(_.where(this.bam_talent_media2, { type : '2' }), 'bam_media_path_full'));

	if (media_path) {
		return 'https://etdownload.s3.amazonaws.com/' + media_path;
	}
	else {
		return 'https://www.exploretalent.com/graphics/filler.jpg';
	}
}

Talent.prototype.getSocialAccount = function(type) {
	var social = _.first(_.pluck(_.where(this.bam_talent_social, { sm_type : type }), 'sm_url'));

	return social;
}

Talent.prototype.getLocation = function() {
	if (this.bam_talentinfo2 && this.bam_talentinfo2.city1) {
		return this.bam_talentinfo2.city1;
	}
	else if(this.city && this.state && this.state.length > 2) {
		return this.city + ', ' + this.state;
	}
	else if(this.state && this.state.length > 2) {
		return this.city;
	}
	else {
		return 'Not Set';
	}
}

Talent.prototype.heightText = function() {
	var feet = Math.floor(this.bam_talentinfo1.heightinches / 12.00);
	var inches = feet * 12;
	return feet + '"' + inches + "'";
}

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
	'bam_talent_general',
	'bam_talent_social:bam_talent_socials',
	//if using GET from api, result is in the data property, set model to array of bam_talentcis
	'data:bam_talentcis'
];

module.exports = Talent;
