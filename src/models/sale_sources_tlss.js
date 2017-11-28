'use strict'

let _ = require('lodash'),
  sale_sources_tlss = {}

sale_sources_tlss.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('sale_sources_tls', item)
  })
}

module.exports = sale_sources_tlss
