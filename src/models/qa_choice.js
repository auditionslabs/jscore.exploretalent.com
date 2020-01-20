'use strict'

let _ = require('lodash')

function QaChoice (data) {
  _.extend(this, data || {})
}

QaChoice.relationship = [
  'data:qa_choices'
]

module.exports = QaChoice
