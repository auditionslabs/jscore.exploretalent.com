'use strict'

let _ = require('lodash'),
  trm_script_categories = {},
  TrmScriptCategory = require('src/models/trm_script_category.js')

trm_script_categories.relationship = TrmScriptCategory.relationship

trm_script_categories.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('trm_script_category', item)
  })
}

module.exports = trm_script_categories
