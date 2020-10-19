'use strict'

let _ = require('lodash'),
  trollboxes = {}

trollboxes.create = function (array) {
  let model = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return model('trollbox', item)
  })
}

module.exports = trollboxes
