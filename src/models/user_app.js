'use strict'

let _ = require('lodash')

function UserApp (data) {
  _.extend(this, data)
}

UserApp.relationship = [
  'data:user_apps'
]
module.exports = UserApp
