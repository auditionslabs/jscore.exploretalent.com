'use strict'

let _ = require('lodash'),
  castings_evils = {}

castings_evils.create = function(array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function(item) {
    return modelify('castings_evil', item)
  })
}

module.exports = castings_evils
