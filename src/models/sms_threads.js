'use strict'

let _ = require('lodash'),
  sms_threads = {}

sms_threads.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('sms_thread', item)
  })
}

module.exports = sms_threads
