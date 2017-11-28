'use strict'

let _ = require('lodash')

function FutureRecurring (data) {
  _.extend(this, data || {})
}

FutureRecurring.relationship = [
  'data:future_recurrings'
]

module.exports = FutureRecurring
