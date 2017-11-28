'use strict'

let _ = require('lodash')

function LegacyPackages (data) {
  _.extend(this, data || {})
}

LegacyPackages.relationship = [
  'data:legacy_packages'
]

module.exports = LegacyPackages
