'use strict'

var _ = require('lodash')

function TalentSocial(data) {
	_.extend(this, data || {})
}

TalentSocial.prototype.getByType = function(type) {
	if (this.data) {
		var social = _.first(_.where(this.data, { sm_type : type }))
		return social
	}
}

TalentSocial.relationship = [
	'talentnum:bam_talentci',
	'data:bam_talent_socials'
]

module.exports = TalentSocial
