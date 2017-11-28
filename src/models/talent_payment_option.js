'use strict'

let _ = require('lodash')

function TalentPaymentOptions (data) {
  _.extend(this, data || {})
}

TalentPaymentOptions.relationship = [
  'data:talent_payment_options'
]

module.exports = TalentPaymentOptions
