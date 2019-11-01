'use strict'

let _ = require('lodash')

function VicidialScoreCardReports (data) {
  _.extend(this, data || {})
}

VicidialScoreCardReports.relationship = [
  'data:vicidial_scorecard_reports'
]

module.exports = VicidialScoreCardReports
