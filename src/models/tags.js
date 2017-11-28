'use strict'

var _ = require('lodash'),
  tags = {}

tags.create = function(array) {
  var modelify = require('src/services/model.js')

  return _.map(array || [], function(item) {
    return modelify('tag', item)
  })
}

module.exports = tags
