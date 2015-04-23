'use strict';

var _ = require('lodash'),
	talent = require('../services/talent.js'),
	date = require('../services/date.js');

function TalentInfo1(data) {
	_.extend(this, data);
}

TalentInfo1.relationship = [
	'bam_talentci'
];

TalentInfo1.prototype.getHeight = function() {

	return talent.formatFeetInchesFromInches(this.heightinches);

};

TalentInfo1.prototype.getWeight = function() {
	var weight = this.weightpounds;
	return weight? (weight + ' lbs.'): '';
};

TalentInfo1.prototype.getAge = function() {
	if(this.dobyyyy && this.dobmm && this.dobdd) {
		return date.calculateAge(this.dobyyyy, this.dobmm, this.dobdd);
	}
};

TalentInfo1.prototype.getProfileData = function() {
	return _(arguments).map(function(arg) {
		return _.isFunction(this[arg])? this[arg](): this[arg];
	}, this).compact().value().join(', ');
};

module.exports = TalentInfo1;
