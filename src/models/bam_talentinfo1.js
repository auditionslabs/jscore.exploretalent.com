'use strict'

let _ = require('lodash'),
  converter = require('src/services/converter.js'),
  date = require('src/services/date.js')

function TalentInfo1 (data) {
  _.extend(this, data)
}

TalentInfo1.relationship = [
  'bam_talentci'
]

module.exports = TalentInfo1
