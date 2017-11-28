'use strict'

var _ = require('lodash')

function Payments(data) {
	_.extend(this, data || {})
}

Payments.relationship = [
	'data:payments'
]

module.exports = Payments
