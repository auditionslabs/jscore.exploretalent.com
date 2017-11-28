'use strict'

let _ = require('lodash')

function Talentordertracking (data) {
  _.extend(this, data || {})
}

Talentordertracking.relationship = [
  'data:talentordertrackings'
]

module.exports = Talentordertracking
