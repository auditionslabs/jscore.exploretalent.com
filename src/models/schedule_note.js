'use strict'

let _ = require('lodash')

function ScheduleNote (data) {
  _.extend(this, data)
}

ScheduleNote.relationship = [
  'user',
  'data:schedule_notes'
]

module.exports = ScheduleNote
