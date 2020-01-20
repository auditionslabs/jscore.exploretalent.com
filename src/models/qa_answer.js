'use strict'

let _ = require('lodash')

function QaAnswer (data) {
  _.extend(this, data || {})
}

QaAnswer.relationship = [
  'data:qa_answers'
]

module.exports = QaAnswer
