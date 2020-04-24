'use strict'

let _ = require('lodash'),
  liveagent_tickets = {}

liveagent_tickets.create = function (array) {
  let model = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return model('liveagent_ticket', item)
  })
}

module.exports = liveagent_tickets
