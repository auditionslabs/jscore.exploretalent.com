'use strict'

let _ = require('lodash')

function CastingsEvil (data) {
  _.extend(this, data || {})
}

module.exports = CastingsEvil
