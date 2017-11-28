'use strict'

let _ = require('lodash')

function ContestMedia (data) {
  _.extend(this, data || {})
}

ContestMedia.relationship = [
  'data:contest_medias'
]

module.exports = ContestMedia
