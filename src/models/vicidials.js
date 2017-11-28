'use strict'

let _ = require('lodash'),
  vicidials = {}

vicidials.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('vicidial', item)
  })
}

module.exports = vicidials
