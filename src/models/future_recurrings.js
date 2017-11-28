'use strict'

let _ = require('lodash'),
  future_recurrings = {}

future_recurrings.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('future_recurring', item)
  })
}

module.exports = future_recurrings
