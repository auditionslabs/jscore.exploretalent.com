'use strict'

let _ = require('lodash'),
  models = {}

models.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('report_abuse', item)
  })
}

module.exports = models
