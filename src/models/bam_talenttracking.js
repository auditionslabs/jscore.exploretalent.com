'use strict'

var _ = require('lodash')

function Talenttracking(data) {
  _.extend(this, data || {})
}

Talenttracking.relationship = [
  'data:bam_talenttrackings'
]

module.exports = Talenttracking
