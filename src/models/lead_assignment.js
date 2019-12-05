'use strict'

let _ = require('lodash')

function LeadAssignment (data) {
  _.extend(this, data || {})
}

LeadAssignment.relationship = [
  'data:lead_assignments'
]

module.exports = LeadAssignment
