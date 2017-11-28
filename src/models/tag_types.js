'use strict'

let _ = require('lodash'),
  tag_types = {}

tag_types.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('tag_type', item)
  })
}

module.exports = tag_types
