'use strict'

let _ = require('lodash'),
  transactions_stores = {}

transactions_stores.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('transactions_store', item)
  })
}

module.exports = transactions_stores
