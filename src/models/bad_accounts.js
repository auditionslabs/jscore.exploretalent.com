'use strict'

let _ = require('lodash'),
  bad_accountss = {}

bad_accountss.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('bad_account', item)
  })
}

module.exports = bad_accountss
