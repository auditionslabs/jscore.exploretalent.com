'use strict'

var _ = require('lodash'),
  app_xorigins = {}

app_xorigins.create = function(array) {
  var modelify = require('src/services/model.js')

  return _.map(array || [], function(item) {
    return modelify('app_xorigin', item)
  })
}

module.exports = app_xorigins
