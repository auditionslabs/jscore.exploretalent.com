'use strict'

let _ = require('lodash'),
  converter = require('src/services/converter.js'),
  date = require('src/services/date.js')

function CastCat (data) {
  _.extend(this, data)
}

CastCat.relationship = [
  'bam_talentci'
]

module.exports = CastCat
