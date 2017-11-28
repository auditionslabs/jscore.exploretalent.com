'use strict'

let _ = require('lodash'),
  vicidial_reportss = {}

vicidial_reportss.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('vicidial_report', item)
  })
}

module.exports = vicidial_reportss
