'use strict'

let _ = require('lodash'),
  tags = {}

tags.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('tag', item)
  })
}

module.exports = tags
