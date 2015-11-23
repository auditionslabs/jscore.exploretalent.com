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
	return date.calculateAge(this.bam_talentinfo1.dobyyyy, this.bam_talentinfo1.dobmm, this.bam_talentinfo1.dobdd);
}

Talent.prototype.isPaying = function() {
	return this.bam_talentrecurring ? true : false;
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

Talent.prototype.getPrimaryPhotoId = function() {
	var id =
		_.first(
			_.pluck(
				_.uniq(([]).concat(
					_.where(this.bam_talent_media2, { type : 2 }),
					_.where(this.bam_talent_media2, { type : '2' })
				)),
				'id'
			)
		);
 	return id;
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
	var inches = feet % 12;
	return feet + "'" + inches + '"';
}

Talent.prototype.stateText = function() {
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

Talent.prototype.getSelfSubmissions = function () {
	var data = {
		query : [
			[ 'with', 'bam_role.bam_casting'],
			[ 'where', 'submission', '=', 1 ],
			[ 'where', 'invitee_id', '=', this.user.id]
		]
	}

  return scheduleResource.get(data);

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
