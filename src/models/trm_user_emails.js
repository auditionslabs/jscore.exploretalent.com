'use strict'

let _ = require('lodash'),
  trm_user_emails = {}

trm_user_emails.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('trm_user_email', item)
  })
}

module.exports = trm_user_emails
