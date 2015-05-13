'use strict';

var _ = require('lodash');

function TalentSocial(data) {
	_.extend(this, data || {});
}

TalentSocial.prototype.getSocialAccount = function(type) {
	if (this.data) {
		var social = _.first(_.pluck(_.where(this.data, { sm_type : type }), 'sm_url'));
		return social;
	}
}t

TalentSocial.relationship = [
	'talentnum:bam_talentci',
	'data:bam_talent_socials'
];

module.exports = TalentSocial;
