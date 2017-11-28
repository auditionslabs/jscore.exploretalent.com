'use strict'

var _ = require('lodash'),
  feedbacks = {}

feedbacks.create = function(array) {
  var modelify = require('src/services/model.js')

  return _.map(array || [], function(item) {
    return modelify('feedback', item)
  })
}

module.exports = feedbacks
