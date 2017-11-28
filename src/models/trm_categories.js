'use strict'

let _ = require('lodash'),
  trm_categories = {},
  TrmCategory = require('src/models/trm_category.js')

trm_categories.relationship = TrmCategory.relationship

trm_categories.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('trm_category', item)
  })
}

module.exports = trm_categories
