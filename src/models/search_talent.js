'use strict';

var _ = require('lodash'),
	talent = require('src/services/talent.js'),
	date = require('src/services/date.js');

function Talent(data) {
	_.extend(this, data || {});
}

Talent.prototype.getFullName = function() {
	return talent.getFullName(this.fname, this.lname);
};

Talent.prototype.getAge = function() {
	return date.calculateAge(this.dobyyyy, this.dobmm, this.dobdd);
}

Talent.prototype.getPrimaryPhoto = function() {
	var media_path =
		_.first(
			_.pluck(
				_.uniq(([]).concat(
					_.where(this.bam_talent_media2, { type : 2 }),
					_.where(this.bam_talent_media2, { type : '2' })
				)),
				'bam_media_path_full'
			)
		);

	var gender = this.bam_talentinfo1 ? this.bam_talentinfo1.sex : 'Male';

	if (media_path) {
		return 'https://etdownload.s3.amazonaws.com/' + media_path;
	}
	else {
		if(gender == "Male") {
			var imgsrc = $('.profile-pic-primary').attr('src');
			if(imgsrc == '/images/filler.jpg') {
				$('a.fancybox').addClass('show-upload-primary-photo-btn');
				$('a.fancybox').removeClass('fancybox');
			}
			return '/images/filler.jpg';
		}

		else {
			var imgsrc = $('.profile-pic-primary').attr('src');
			if(imgsrc == '/images/filler_women.jpg') {
				$('a.fancybox').addClass('show-upload-primary-photo-btn');
				$('a.fancybox').removeClass('fancybox');
			}
			return '/images/filler_women.jpg';
		}
	}
}

Talent.prototype.getLocation = function() {
	if (this.city1) {
		return this.city1;
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

Talent.prototype.getHeight = function() {
	var feet = Math.floor(this.heightinches / 12.00);
	var inches = feet % 12;
	return feet + "'" + inches + '"';
}

Talent.prototype.getState = function() {
	var states = {
		'AL' : 'Alabama',
		'AK' : 'Alaska',
		'AZ' : 'Arizona',
		'AR' : 'Arkansas',
		'CA' : 'California',
		'CO' : 'Colorado',
		'CT' : 'Connecticut',
		'DE' : 'Delaware',
		'FL' : 'Florida',
		'GA' : 'Georgia',
		'HI' : 'Hawaii',
		'ID' : 'Idaho',
		'IL' : 'Illinois',
		'IN' : 'Indiana',
		'IA' : 'Iowa',
		'KS' : 'Kansas',
		'KY' : 'Kentucky',
		'LA' : 'Louisiana',
		'ME' : 'Maine',
		'MD' : 'Maryland',
		'MA' : 'Massachusetts',
		'MI' : 'Michigan',
		'MN' : 'Minnesota',
		'MS' : 'Mississippi',
		'MO' : 'Missouri',
		'MT' : 'Montana',
		'NE' : 'Nebraska',
		'NV' : 'Nevada',
		'NH' : 'New Hampshire',
		'NJ' : 'New Jersey',
		'NM' : 'New Mexico',
		'NY' : 'New York',
		'NC' : 'North Carolina',
		'ND' : 'North Dakota',
		'OH' : 'Ohio',
		'OK' : 'Oklahoma',
		'OR' : 'Oregon',
		'PA' : 'Pennsylvania',
		'RI' : 'Rhode Island',
		'SC' : 'South Carolina',
		'SD' : 'South Dakota',
		'TN' : 'Tennessee',
		'TX' : 'Texas',
		'UT' : 'Utah',
		'VT' : 'Vermont',
		'VA' : 'Virginia',
		'WA' : 'Washington',
		'WV' : 'West Virginia',
		'WI' : 'Wisconsin',
		'WY' : 'Wyoming'
	};

	return states[this.state];
}

Talent.relationship = [
	'data:search_talents'
];

module.exports = Talent;