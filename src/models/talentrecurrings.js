'use strict'

let _ = require('lodash'),
  talentrecurrings = {}

talentrecurrings.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('talentrecurring', item)
  })
}

module.exports = talentrecurrings
