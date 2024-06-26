'use strict'

let _ = require('lodash'),
  reminders = {}

reminders.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('reminder', item)
  })
}

module.exports = reminders
