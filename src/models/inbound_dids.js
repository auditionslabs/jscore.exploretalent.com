'use strict'

let _ = require('lodash'),
  InboundDids = {},
  InboundDid = require('src/models/inbound_did.js')

InboundDids.relationship = InboundDid.relationship

InboundDids.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('inbound_did', item)
  })
}

module.exports = InboundDids
