'use strict';

var _ = require('lodash'),
	talentService = require('src/services/talent.js'),
	restService = require('src/services/rest.js'),
	scheduleResource = require('src/resources/schedule.js'),
	scheduleImportResource = require('src/resources/schedule_import.js'),
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
			[ 'with', 'invitee.bam_talentci.bam_talent_dance' ],
			[ 'with', 'invitee.bam_talentci.bam_talent_music' ],
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

Role.prototype.getLikeItListCount = function() {
	var deferred = $.Deferred();

	var data = {
		per_page : 1,
		query    : [
			[ 'join', 'bam.laret_users', 'bam.laret_users.bam_talentnum', '=', 'search.talents.talentnum' ],
			[ 'leftJoin', 'bam.laret_schedules', 'bam.laret_schedules.invitee_id', '=', 'bam.laret_users.id' ],
			[ 'where', 'bam.laret_schedules.rating', '<>', 0 ],
			[ 'where', 'bam.laret_schedules.bam_role_id', '=', this.role_id ]
		]
	}

	self.core.resource.search_talent.get(data)
		.then(function(res) {
			deferred.resolve(res.total);
		});

	return deferred.promise();
}

Role.prototype.getSubmissionsCount = function() {
	var deferred = $.Deferred();

	var data = {
		per_page : 1,
		page : self.page,
		query : [
			[ 'join', 'bam.laret_users', 'bam.laret_users.bam_talentnum', '=', 'search.talents.talentnum' ],
			[ 'leftJoin', 'bam.laret_schedules', 'bam.laret_schedules.invitee_id', '=', 'bam.laret_users.id' ],
			[ 'where', 'bam.laret_schedules.submission', '=', 1 ],
			[ 'where', 'bam.laret_schedules.bam_role_id', '=', this.role_id ]
		]
	}

	self.core.resource.search_talent.get(data)
		.then(function(res) {
			deferred.resolve(res.total);
		});

	return deferred.promise();
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
		paginate : false
	}

	return scheduleResource.patch(data);
}

Role.prototype.copyToLikeItList = function() {
	var data = {
		query	: [
			[ 'where',
				[ 'where', 'rating', '=', 0 ],
				[ 'orWhereNull', 'rating' ]
			],
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

Role.prototype.copyMatchesToLikeItList = function(pro, user_id) {
	var data = {
		query 		: this.getMatchesFilter(pro).query,
		bam_role_id : this.role_id,
		bam_user_id : user_id,
		bam_cd_user_id : this.bam_casting.user_id
	}

	return scheduleImportResource.post(data);
}

Role.prototype.getMatches = function(pro, options) {
	var data = this.getMatchesFilter(pro, options);

	return searchTalentResource.get(data);
}

Role.prototype.getMatchesFilter = function(pro, options) {
	var data = {
		query : [
			[ 'where', 'is_pro', '=', pro ? 1 : 0 ]
		]
	}

	if (options) {
		data = _.merge(data, options);
	}

	if (parseInt(this.age_min)) {
		data.query.push([ 'where', 'dobyyyy', '<=', new Date().getFullYear() - parseInt(this.age_min) ]);
	}

	if (parseInt(this.age_max)) {
		data.query.push([ 'where', 'dobyyyy', '>=', new Date().getFullYear() - parseInt(this.age_max) ]);
	}

	if (parseInt(this.height_min)) {
		data.query.push([ 'where', 'heightinches', '>=', this.height_min ]);
	}

	if (parseInt(this.height_max)) {
		data.query.push([ 'where', 'heightinches', '<=', this.height_max ]);
	}

	var subquery = [];

	// markets
	var markets = self.project.market.split('>');

	var nationwide = _.find(markets, function(market) {
		return market == 'N/A';
	});

	if (markets.length && !nationwide) {
		subquery = [];

		_.each(markets, function(market) {
			if (subquery.length == 0) {
				subquery.push([ 'where', 'city', 'like', '%' + market + '%' ]);
			}
			else {
				subquery.push([ 'orWhere', 'city', 'like', '%' + market + '%' ]);
			}

			subquery.push([ 'orWhere', 'city1', 'like', '%' + market + '%' ]);
			subquery.push([ 'orWhere', 'city2', 'like', '%' + market + '%' ]);
			subquery.push([ 'orWhere', 'city3', 'like', '%' + market + '%' ]);
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

	var builds = this.getBuilds();

	if (builds.length) {
		subquery = [];

		_.each(builds, function(build) {
			if (subquery.length == 0) {
				subquery.push([ 'where', 'build', '=', build ]);
			}
			else {
				subquery.push([ 'orWhere', 'build', '=', build ]);
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
		return getValues(hairstyles);

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
		bb			: 'Muscular',
		xlarge		: 'Extra Large',
		large		: 'Large',
		petite		: 'Petite',
		thin		: 'Slim',
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
