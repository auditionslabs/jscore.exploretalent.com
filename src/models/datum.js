'use strict'

let _ = require('lodash')

function Datum (data) {
  _.extend(this, data || {})
}

Datum.relationship = [
  'data:data'
]

module.exports = Datum
