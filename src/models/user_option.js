'use strict'

let _ = require('lodash')

function UserOption (data) {
  _.extend(this, data)
}

UserOption.relationship = [
  'data:user_options'
]
module.exports = UserOption
