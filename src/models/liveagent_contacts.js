'use strict'

let _ = require('lodash'),
  liveagent_contacts = {}

liveagent_contacts.create = function (array) {
  let model = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return model('liveagent_contact', item)
  })
}

module.exports = liveagent_contacts
