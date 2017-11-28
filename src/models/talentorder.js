'use strict'

let _ = require('lodash')

function TalentOrder (data) {
  _.extend(this, data || {})
}

TalentOrder.relationship = [
  'data:talentorders'
]

module.exports = TalentOrder
