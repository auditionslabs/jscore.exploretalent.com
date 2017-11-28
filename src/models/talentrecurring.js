'use strict'

var _ = require('lodash')

function Talentrecurring(data) {
	_.extend(this, data || {})
}

Talentrecurring.relationship = [
	'data:talentrecurrings'
]

module.exports = Talentrecurring
