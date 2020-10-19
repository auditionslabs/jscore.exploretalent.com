'use strict'

let _ = require('lodash')

function Trollbox (data) {
  _.extend(this, data || {})
}

module.exports = Trollbox
