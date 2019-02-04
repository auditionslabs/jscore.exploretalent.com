'use strict'

let _ = require('lodash')

function UserEmail (data) {
  _.extend(this, data)
}

UserEmail.relationship = [
  'data:user_emails'
]
module.exports = UserEmail
