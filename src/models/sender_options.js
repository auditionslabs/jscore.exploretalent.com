'use strict'

let _ = require('lodash'),
  sender_options = {}

sender_options.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('sender_option', item)
  })
}

module.exports = sender_options
