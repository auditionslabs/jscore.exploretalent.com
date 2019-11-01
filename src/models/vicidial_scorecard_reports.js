'use strict'

let _ = require('lodash'),
  vicidial_scorecard_reports = {}

vicidial_scorecard_reports.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('vicidial_scorecard_report', item)
  })
}

module.exports = vicidial_scorecard_reports
