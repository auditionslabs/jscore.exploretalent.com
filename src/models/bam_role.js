'use strict';

var _ = require('lodash'),
	date = require('../services/date.js');

function Role(data) {
	_.extend(this, data);
}

Role.prototype.getHeightMinText = function() {
	var feet = Math.floor(this.height_min / 12.00);
	var inches = feet % 12;
	return feet + '"' + inches + "'";
}

Role.prototype.getHeightMaxText = function() {
	var feet = Math.floor(this.height_max / 12.00);
	var inches = feet % 12;
	return feet + '"' + inches + "'";
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

	if (this.ethnicity_any == 1)
		return array;

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

	var (e in ethnicities) {
		if (this['ethnicity_' + e] == 1) {
			array.push(ethnicities[e]);
		}
	}

	return array;
}

Role.prototype.getHairColors = function() {
	var array = [];

	if (this.hair_any == 1)
		return array;

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

	var (color in haircolors) {
		if (this['hair_' + color] == 1) {
			array.push(haircolors[color]);
		}
	}

	return array;
}

Role.prototype.getHairStyles = function() {
	var array = [];

	if (this.hairstyle_any == 1)
		return array;

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

	var (style in hairstyles) {
		if (this['hairstyle_' + style] == 1) {
			array.push(hairstyles[style]);
		}
	}

	return array;
}

Role.prototype.getEyeColors = function() {
	var array = [];

	if (this.eye_any == 1)
		return array;

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

	var (color in eyecolors) {
		if (this['eye_' + color] == 1) {
			array.push(eyecolors[color]);
		}
	}

	return array;
}

Role.prototype.getBuilds = function() {
	var array = [];

	if (this.built_any == 1)
		return array;

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

	var (b in builds) {
		if (this['built_' + b] == 1) {
			array.push(builds[b]);
		}
	}

	return array;
}

Role.relationship = [
	'data:bam_roles',
	'schedules'
];

module.exports = Role;
