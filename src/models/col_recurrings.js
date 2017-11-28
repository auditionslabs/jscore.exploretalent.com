'use strict'

let _ = require('lodash'),
  col_recurrings = {}

col_recurrings.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('col_recurring', item)
  })
}

module.exports = col_recurrings
