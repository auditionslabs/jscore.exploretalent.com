'use strict'

let _ = require('lodash'),
  feedbacks = {}

feedbacks.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('feedback', item)
  })
}

module.exports = feedbacks
