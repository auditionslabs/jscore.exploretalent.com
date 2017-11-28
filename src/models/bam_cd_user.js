'use strict'

let _ = require('lodash'),
  talentHelper = require('src/services/talent.js')

function CdUser (data) {
  _.extend(this, data || {})
}

CdUser.prototype.getCallStat = function () {
  if (this.call_status == 0) {
    return 'Not Set'
  }
  if (this.call_status == 1) {
    return 'Left Massage'
  }
  if (this.call_status == 2) {
    return 'Incomplete Review'
  }
  if (this.call_status == 3) {
    return 'Need to Re-Review'
  }
  if (this.call_status == 4) {
    return 'Missing Contact Info'
  }
  if (this.call_status == 5) {
    return 'Bad Contact Info'
  }
  if (this.call_status == 6) {
    return 'Suspicious'
  }
  if (this.call_status == 7) {
    return 'Happy CD/Reference'
  }
  if (this.call_status == 8) {
    return 'They Hate Us/No call'
  }
  if (this.call_status == 9) {
    return 'Data Ok - need call'
  } else {
    return 'Good Reference'
  }
}

CdUser.prototype.getFullName = function () {
  return talentHelper.getFullName(this.fname, this.lname)
}

CdUser.relationship = [
  'user',
  'data:bam_cd_users'
]

module.exports = CdUser
