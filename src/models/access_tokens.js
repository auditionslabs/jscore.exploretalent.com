'use strict'

let _ = require('lodash'),
  access_tokens = {}

access_tokens.create = function (array) {
  let model = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return model('access_token', item)
  })
}

module.exports = access_tokens
