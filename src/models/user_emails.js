'use strict'

let _ = require('lodash'),
  user_emails = {}

user_emails.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('user_email', item)
  })
}

module.exports = user_emails
