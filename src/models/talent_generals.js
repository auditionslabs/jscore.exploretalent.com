'use strict'

let _ = require('lodash'),
  talent_generals = {}

talent_generals.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('talent_general', item)
  })
}

module.exports = talent_generals
