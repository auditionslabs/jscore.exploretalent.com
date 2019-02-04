'use strict'

let _ = require('lodash')

function TrmUserEmail (data) {
  _.extend(this, data)
}

TrmUserEmail.relationship = [
  'data:trm_user_emails'
]
module.exports = TrmUserEmail
