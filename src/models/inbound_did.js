'use strict'

let _ = require('lodash')

function InboundDid (data) {
  _.extend(this, data || {})
}

module.exports = InboundDid
