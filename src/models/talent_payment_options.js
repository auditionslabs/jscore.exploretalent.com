'use strict'

let _ = require('lodash'),
  talent_payment_optionss = {}

talent_payment_optionss.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('talent_payment_option', item)
  })
}

module.exports = talent_payment_optionss
