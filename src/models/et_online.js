'use strict'

let _ = require('lodash')

function EtOnline (data) {
  _.extend(this, data || {})
}

module.exports = EtOnline
