'use strict';

var _ = require('lodash'),
	talent_socials = {},
	TalentSocial = require('src/models/bam_talent_social.js');

talent_socials.relationship = TalentSocial.relationship;

talent_socials.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('bam_talent_social', item);
	});
};

module.exports = talent_socials;
