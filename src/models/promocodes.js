'use strict'

let _ = require('lodash'),
  promocodes = {}

promocodes.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('promocode', item)
  })
}

module.exports = promocodes
