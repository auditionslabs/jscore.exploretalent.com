'use strict'

var _ = require('lodash'),
  future_recurrings = {}

future_recurrings.create = function(array) {
  var modelify = require('src/services/model.js')

  return _.map(array || [], function(item) {
    return modelify('future_recurring', item)
  })
}

module.exports = future_recurrings
