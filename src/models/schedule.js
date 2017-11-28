'use strict'

var _ = require('lodash'),
  date = require('../services/date.js')

function Schedule(data) {
  _.extend(this, data)
}

Schedule.prototype.convertToFullDate = function(timestamp) {
  return date.formatYMD(parseInt(timestamp))
}

Schedule.prototype.getTalent = function() {
  return this.invitee && parseInt(this.invitee.bam_talentnum) ? this.invitee : this.inviter
}

Schedule.relationship = [
  'invitee:user',
  'inviter:user',
  'bam_role',
  'schedule_notes',
  'conversation',
  'data:schedules'
]

module.exports = Schedule
