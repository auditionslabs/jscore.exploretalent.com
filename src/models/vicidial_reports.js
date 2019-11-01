'use strict'

let _ = require('lodash'),
  vicidial_reports = {}

vicidial_reports.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('vicidial_report', item)
  })
}

module.exports = vicidial_reports
