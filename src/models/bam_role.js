'use strict';

var _ = require('lodash'),
	talentService = require('src/services/talent.js'),
	restService = require('src/services/rest.js'),
	scheduleResource = require('src/resources/schedule.js'),
	searchTalentResource = require('src/resources/search_talent.js');

function Role(data) {
	_.extend(this, data);
}

Role.prototype.getHeightMinText = function() {
	if (parseInt(this.height_min))
		return talentService.getHeight(this.height_min);
	else
		return 'Any';
}

Role.prototype.getHeightMaxText = function() {
	if (parseInt(this.height_max))
		return talentService.getHeight(this.height_max);
	else
		return 'Any';
}

Role.prototype.getLikeItList = function(options) {
	var data = {
		query	: [
			[ 'with', 'invitee.bam_talentci.bam_talentinfo1' ],
			[ 'with', 'invitee.bam_talentci.bam_talentinfo2' ],
			[ 'with', 'invitee.bam_talentci.bam_talent_media2' ],
			[ 'with', 'schedule_notes.user.bam_cd_user' ],
			[ 'with', 'conversation.messages.user.bam_talentci' ],
			[ 'with', 'bam_role' ],
			[ 'where', 'rating', '<>', 0 ],
			[ 'where', 'bam_role_id', '=', this.role_id ]
		]
	}

	if (options) {
		data = _.merge(data, options);
	}

	return scheduleResource.get(data);
}

Role.prototype.deleteLikeItList = function() {
	var data = {
		query	: [
			[ 'where', 'rating', '<>', 0 ],
			[ 'where', 'bam_role_id', '=', this.role_id ]
		],
		fields  : {
			rating : 0
		},
		per_page : 1000000
	}

	return scheduleResource.patch(data);
}

Role.prototype.copyToLikeItList = function() {
	var data = {
		query	: [
			[ 'where', 'rating', '=', 0 ],
			[ 'where', 'submission', '=', 1 ],
			[ 'where', 'bam_role_id', '=', this.role_id ]
		],
		fields : {
			rating : 3
		},
		per_page : 1000000
	}

	return scheduleResource.patch(data);
}

Role.prototype.deleteSelfSubmissions = function() {
	var data = {
		with_trashed : 1,
		query	: [
			[ 'where', 'submission', '=', 1 ],
			[ 'where', 'bam_role_id', '=', this.role_id ]
		],
		per_page : 1000000
	}

	return scheduleResource.delete(data);
}

Role.prototype.getSelfSubmissions = function(options) {
	var data = {
		query : [
			[ 'with', 'invitee.bam_talentci.bam_talentinfo1' ],
			[ 'with', 'invitee.bam_talentci.bam_talentinfo2' ],
			[ 'with', 'invitee.bam_talentci.bam_talent_media2' ],
			[ 'with', 'schedule_notes.user.bam_cd_user' ],
			[ 'where', 'submission', '=', 1 ],
			[ 'where', 'bam_role_id', '=', this.role_id ]
		]
	}

	if (options) {
		data = _.merge(data, options);
	}

	return scheduleResource.get(data);
}

Role.prototype.addMatchesToLikeItList = function(pro) {
	var data = getMatchesFilter(pro);

	return restService.post(self.core.config.api.base + '/cd/talentci/import/' + this.role_id, data);
}

Role.prototype.getMatches = function(pro) {
	var data = this.getMatchesFilter(pro);

	return searchTalentResource.get(data);
}

Role.prototype.getMatchesFilter = function(pro) {
	var data = {
		query : [
			[ 'where', 'dobyyyy', '<=', new Date().getFullYear() - parseInt(this.age_min) ],
			[ 'where', 'dobyyyy', '>=', new Date().getFullYear() - parseInt(this.age_max) ],
			[ 'where', 'heightinches', '>=', this.height_min ],
			[ 'where', 'heightinches', '<=', this.height_max ],
			[ 'where', 'is_pro', '=', pro ? 1 : 0 ],
		]
	}

	var subquery = [];

	// markets
	var markets = self.project.market.split('>');

	if (markets.length) {
		subquery = [];

		_.each(markets, function(market) {
			if (subquery.length == 0) {
				subquery.push([ 'where', 'city1', 'like', '%' + market + '%' ]);
			}
			else {
				subquery.push([ 'orWhere', 'city1', 'like', '%' + market + '%' ]);
			}
			subquery.push([ 'orWhere', 'city2', 'like', '%' + market + '%' ]);
		});

		data.query.push([ 'where', subquery ]);
	}

	var genders = this.getGenders();

	if (genders.length) {
		subquery = [];

		_.each(genders, function(gender) {
			if (subquery.length == 0) {
				subquery.push([ 'where', 'sex', '=', gender ]);
			}
			else {
				subquery.push([ 'orWhere', 'sex', '=', gender ]);
			}
		});

		data.query.push([ 'where', subquery ]);
	}

	var ethnicities = this.getEthnicities();

	if (ethnicities.length) {
		subquery = [];

		_.each(ethnicities, function(ethnicity) {
			if (subquery.length == 0) {
				subquery.push([ 'where', 'ethnicity', '=', ethnicity ]);
			}
			else {
				subquery.push([ 'orWhere', 'ethnicity', '=', ethnicity ]);
			}
		});

		data.query.push([ 'where', subquery ]);
	}

	return data;
}

Role.prototype.getGenders = function() {
	var array = [];

	if (this.gender_male == 1)
		array.push('Male');

	if (this.gender_female == 1)
		array.push('Female');

	return array;
}

Role.prototype.getEthnicities = function() {
	var array = [];

	var ethnicities = {
		african		: 'African',
		african_am	: 'African American',
		asian		: 'Asian',
		carribian	: 'Caribbean',
		caucasian	: 'Caucasian',
		hispanic	: 'Hispanic',
		mediterranean	: 'Mediterranean',
		middle_est	: 'Middle Eastern',
		mixed		: 'Mixed',
		native_am	: 'American',
		american_in	: 'American Indian',
		east_indian	: 'East Indian'
	}

	if (this.ethnicity_any == 1)
		return getValues(ethnicities);

	for (var e in ethnicities) {
		if (this['ethnicity_' + e] == 1) {
			array.push(ethnicities[e]);
		}
	}

	return array;
}

Role.prototype.getHairColors = function() {
	var array = [];

	var haircolors = {
		auburn		: 'Auburn',
		black		: 'Black',
		blonde		: 'Blonde',
		brown		: 'Brown',
		chestnut	: 'Chestnut',
		dark_brown 	: 'Dark Brown',
		grey		: 'Grey',
		red			: 'Red',
		white		: 'White',
		salt_pepper : 'Salt&Peppe'
	};

	if (this.hair_any == 1)
		return getValues(haircolors);
for (var color in haircolors) {
		if (this['hair_' + color] == 1) {
			array.push(haircolors[color]);
		}
	}

	return array;
}

Role.prototype.getHairStyles = function() {
	var array = [];

	var hairstyles = {
		afro 	: 'Afro',
		bald	: 'Bald',
		buzz	: '',
		cons	: 'Conservati',
		dread	: 'Dreadlocks',
		long	: 'Long',
		medium	: 'Medium',
		shaved	: 'Shaved',
		short	: 'Short'
	}

	if (this.hairstyle_any == 1)
		return getValues(hairstyles.values);

	for (var style in hairstyles) {
		if (this['hairstyle_' + style] == 1) {
			array.push(hairstyles[style]);
		}
	}

	return array;
}

Role.prototype.getEyeColors = function() {
	var array = [];

	var eyecolors = {
		blue	: 'Blue',
		b_g		: 'Blue-Green',
		brown	: 'Brown',
		green	: 'Green',
		grey	: 'Grey',
		g_b		: 'Grey-Blue',
		g_g		: 'Grey-Green',
		hazel	: 'Hazel'
	}

	if (this.eye_any == 1)
		return getValues(eyecolors);

	for (var color in eyecolors) {
		if (this['eye_' + color] == 1) {
			array.push(eyecolors[color]);
		}
	}

	return array;
}

Role.prototype.getBuilds = function() {
	var array = [];

	var builds = {
		medium		: 'Medium',
		athletic	: 'Athletic',
		bb			: 'Body Builder',
		xlarge		: 'Extra Large',
		large		: 'Large',
		petite		: 'Petite',
		thin		: 'Thin',
		lm			: 'Lean Muscle',
		average		: 'Average'
	}

	if (this.built_any == 1)
		return getValues(builds);

	for (var b in builds) {
		if (this['built_' + b] == 1) {
			array.push(builds[b]);
		}
	}

	return array;
}

function getValues(obj) {
	return Object.keys(obj).map(function (key) {
		return obj[key];
	});
}

Role.relationship = [
	'data:bam_roles',
	'schedules',
	'bam_casting'
];

module.exports = Role;
