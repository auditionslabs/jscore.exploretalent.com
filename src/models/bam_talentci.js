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
	var media_path = _.first(_.pluck(_.where(this.bam_talent_media2, { type : '2' }), 'media_path'));

	if (media_path)
		media_path = '/' + media_path;
	else
		media_path = '/graphics/filler.jpg';

	var base_url = 'https://www.exploretalent.com';
	var watermark = '/etwatermark.php?image=';
	var folder = 'media' + _.padLeft(Math.floor(this.talentnum / 10000), 3, '0') + '/' + _.padLeft(this.talentnum, 10, '0');

	return base_url + watermark + folder + media_path;
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
	'bam_talent_general'
];

module.exports = Talent;
