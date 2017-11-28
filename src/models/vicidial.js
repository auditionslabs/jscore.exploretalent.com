'use strict'

let _ = require('lodash')

function Vicidial (data) {
  _.extend(this, data || {})
}

Vicidial.relationship = [
  'data:vicidials'
]

module.exports = Vicidial
