var _ = require('lodash'),
  markets = {},
  Market = require('src/models/market.js')

markets.relationship = Market.relationship

markets.create = function(array) {
  var modelify = require('src/services/model.js')

  return _.map(array || [], function(item) {
    return modelify('market', item)
  })
}

module.exports = markets
