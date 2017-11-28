'use strict'

let _ = require('lodash')

function TrmCategory (data) {
  _.extend(this, data || {})
}

TrmCategory.relationship = [
  'data:trm_categories'
]

module.exports = TrmCategory
