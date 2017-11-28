'use strict'

let _ = require('lodash')

function Location (data) {
  _.extend(this, data)
}

Location.relationship = [
  'data:locations'
]

module.exports = Location
