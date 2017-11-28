'use strict'

var _ = require('lodash')

function Alert(data) {
	_.extend(this, data || {})
}

Alert.relationship = [
	'data:alerts'
]

module.exports = Alert
