'use strict'

let _ = require('lodash')

function User (data) {
  _.extend(this, data)
}

User.relationship = [
  'user'
]

module.exports = User
