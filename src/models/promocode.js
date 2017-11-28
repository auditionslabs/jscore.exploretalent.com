'use strict'

let _ = require('lodash')

function Promocode (data) {
  _.extend(this, data || {})
}

Promocode.relationship = [
  'data:promocodes'
]

module.exports = Promocode
