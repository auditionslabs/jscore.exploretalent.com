'use strict'

let _ = require('lodash'),
  cd_claim_sales = {}

cd_claim_sales.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('cd_claim_sale', item)
  })
}

module.exports = cd_claim_sales
