'use strict'

let _ = require('lodash')

function TrmFeedback (data) {
  _.extend(this, data || {})
}

TrmFeedback.relationship = [
  'data:trm_feedbacks'
]

module.exports = TrmFeedback
