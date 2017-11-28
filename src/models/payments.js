'use strict'

let _ = require('lodash'),
  payments = {},
  Payments = require('src/models/payment.js')

payments.relationship = Payments.relationship

payments.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('payment', item)
  })
}

module.exports = payments
