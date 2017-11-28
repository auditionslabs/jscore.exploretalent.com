'use strict'

var _ = require('lodash'),
	sales = {},
	Sales = require('src/models/sale.js')

sales.relationship = Sales.relationship

sales.create = function(array) {
	var modelify = require('src/services/model.js')

	return _.map(array || [], function(item) {
		return modelify('sale', item)
	})
}

module.exports = sales
