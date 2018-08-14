'use strict'

let _ = require('lodash')

function StarTalent (data) {
  _.extend(this, data || {})
}

StarTalent.relationship = [
  'data:star_talents'
]

module.exports = StarTalent
