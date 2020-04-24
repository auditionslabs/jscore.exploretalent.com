'use strict'

let _ = require('lodash')

function LiveagentTicket (data) {
  _.extend(this, data || {})
}

module.exports = LiveagentTicket
