'use strict';

var _ = require('lodash'),
	talents = {},
	Talent = require('./bam_talentci.js');

talents.relationship = Talent.relationship;

talents.create = function(array) {
	return _.map(array || [], function(item) {
		return new Talent(item);
	});
};

module.exports = talents;
