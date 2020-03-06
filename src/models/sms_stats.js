'use strict'

let _ = require('lodash'),
  sms_stats = {}

sms_stats.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('sms_stat', item)
  })
}

module.exports = sms_stats
