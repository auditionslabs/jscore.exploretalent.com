'use strict'

let _ = require('lodash'),
  data = {},
  Datum = require('src/models/datum.js')

data.relationship = Datum.relationship

data.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('datum', item)
  })
}

module.exports = data
