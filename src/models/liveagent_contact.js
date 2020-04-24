'use strict'

let _ = require('lodash')

function LiveagentContact (data) {
  _.extend(this, data || {})
}

module.exports = LiveagentContact
