'use strict'

var _ = require('lodash')

function TalentSales(data) {
	_.extend(this, data || {})
}

TalentSales.relationship = [
	'data:talent_sales'
]

module.exports = TalentSales
