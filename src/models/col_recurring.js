'use strict'

let _ = require('lodash')

function ColRecurring (data) {
  _.extend(this, data || {})
}

ColRecurring.relationship = [
  'data:col_recurrings'
]

module.exports = ColRecurring
