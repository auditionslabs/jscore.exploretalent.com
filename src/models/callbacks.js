'use strict'

let _ = require('lodash'),
  callbacks = {},
  Callback = require('src/models/callback.js')

callbacks.relationship = Callback.relationship

callbacks.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('callback', item)
  })
}

module.exports = callbacks
