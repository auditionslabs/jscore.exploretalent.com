'use strict'

let _ = require('lodash'),
  subscriptions = {}

subscriptions.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('cd_user_subscription', item)
  })
}

module.exports = subscriptions
