'use strict'

let _ = require('lodash')

function ContestLink (data) {
  _.extend(this, data || {})
}

ContestLink.relationship = [
  'data:contest_links'
]

module.exports = ContestLink
