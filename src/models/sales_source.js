'use strict'

var _ = require('lodash')

function SalesSource(data) {
	_.extend(this, data || {})
}

SalesSource.relationship = [
	'data:sales_sources'
]

module.exports = SalesSource
