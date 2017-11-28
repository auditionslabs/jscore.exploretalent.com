'use strict'

var _ = require('lodash'),
  locations = {}


locations.create = function(array) {
  var modelify = require('src/services/model.js')

  return _.map(array || [], function(item) {
    return modelify('location', item)
  })
}

module.exports = locations
