'use strict'

let _ = require('lodash')

function TalentGeneral (data) {
  _.extend(this, data || {})
}

TalentGeneral.relationship = [
  'data:talent_generals'
]

module.exports = TalentGeneral
