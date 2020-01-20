'use strict'

let _ = require('lodash')

function QaSection (data) {
  _.extend(this, data || {})
}

QaSection.relationship = [
  'data:qa_sections'
]

module.exports = QaSection
