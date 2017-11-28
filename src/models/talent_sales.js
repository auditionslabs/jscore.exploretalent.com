'use strict'

let _ = require('lodash'),
  talent_saless = {}

talent_saless.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('talent_sale', item)
  })
}

module.exports = talent_saless
