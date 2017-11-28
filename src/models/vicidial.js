'use strict'

var _ = require('lodash')

function Vicidial(data) {
	_.extend(this, data || {})
}

Vicidial.relationship = [
	'data:vicidials'
]

module.exports = Vicidial
