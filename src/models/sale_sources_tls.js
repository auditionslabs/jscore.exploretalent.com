'use strict'

let _ = require('lodash')

function SaleSourcesTls (data) {
  _.extend(this, data || {})
}

SaleSourcesTls.relationship = [
  'data:sale_sources_tlss'
]

module.exports = SaleSourcesTls
