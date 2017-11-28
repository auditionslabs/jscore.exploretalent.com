'use strict'

let _ = require('lodash')

function BannedEmail (data) {
  _.extend(this, data || {})
}

BannedEmail.relationship = [
  'data:banned_emails'
]

module.exports = BannedEmail
