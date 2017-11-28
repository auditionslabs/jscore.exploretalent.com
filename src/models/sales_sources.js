'use strict'

let _ = require('lodash'),
  sales_sources = {}

sales_sources.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('sales_source', item)
  })
}

module.exports = sales_sources
