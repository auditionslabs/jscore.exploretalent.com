'use strict'

let _ = require('lodash')

function TrmScript (data) {
  _.extend(this, data || {})
}

TrmScript.relationship = [
  'data:trm_scripts'
]

module.exports = TrmScript
