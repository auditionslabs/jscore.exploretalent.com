'use strict'

let _ = require('lodash')

function Talentrecurring (data) {
  _.extend(this, data || {})
}

Talentrecurring.relationship = [
  'data:talentrecurrings'
]

module.exports = Talentrecurring
