'use strict'

var _ = require('lodash'),
	converter = require('src/services/converter.js')

function Friend(data) {
	_.extend(this, data)
}

Friend.prototype.getOtherUser = function() {
	if (this.owner) {
		var owner = this.owner

		if (this.talentnum1 == owner.bam_talentci.talentnum) {
			return this.bam_talentci2
		}
		else {
			return this.bam_talentci1
		}
	}
	else {
		return null
	}
}

Friend.relationship = [
	'bam_talentci1:bam_talentci',
	'bam_talentci2:bam_talentci',
	'data:bam_friends'
]

module.exports = Friend
