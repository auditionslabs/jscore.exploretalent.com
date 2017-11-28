'use strict'

var _ = require('lodash')

function CdClaimSale(data) {
  _.extend(this, data || {})
}

CdClaimSale.relationship = [
  'data:cd_claim_sales'
]

module.exports = CdClaimSale
