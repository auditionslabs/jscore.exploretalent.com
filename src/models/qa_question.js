'use strict'

let _ = require('lodash')

function QaQuestion (data) {
  _.extend(this, data || {})
}

QaQuestion.relationship = [
  'data:qa_questions'
]

module.exports = QaQuestion
