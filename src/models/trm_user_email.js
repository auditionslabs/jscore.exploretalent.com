'use strict'

let _ = require('lodash')

function TrmUserEmail (data) {
  _.extend(this, data)
}

UserEmail.relationship = [
  'data:trm_user_emails'
]
module.exports = TrmUserEmail
