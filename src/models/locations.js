'use strict'

let _ = require('lodash'),
  locations = {}

locations.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('location', item)
  })
}

module.exports = locations
