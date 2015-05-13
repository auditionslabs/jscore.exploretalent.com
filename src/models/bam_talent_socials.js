'use strict';

var _ = require('lodash'),
	talent_socials = {},
	TalentSocial = require('./bam_talent_social.js');

talent_socials.relationship = TalentSocial.relationship;

talent_socials.create = function(array) {
	return _.map(array || [], function(item) {
		return new TalentSocial(item);
	});
};

module.exports = talent_socials;
