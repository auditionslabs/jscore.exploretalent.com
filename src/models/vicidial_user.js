'use strict'

var _ = require('lodash')

function VicidialUsers(data) {
  _.extend(this, data || {})
}

VicidialUsers.relationship = [
  'data:vicidial_users'
]

module.exports = VicidialUsers
