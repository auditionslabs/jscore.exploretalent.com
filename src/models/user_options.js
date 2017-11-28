'use strict'

let _ = require('lodash'),
  user_options = {}

user_options.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('user_option', item)
  })
}

module.exports = user_options
