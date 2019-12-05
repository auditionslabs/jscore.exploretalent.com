'use strict'

let _ = require('lodash'),
  lead_assignments = {}

lead_assignments.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('lead_assignment', item)
  })
}

module.exports = lead_assignments
