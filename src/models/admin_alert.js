'use strict'

let _ = require('lodash')

function AdminAlert (data) {
  _.extend(this, data || {})
}

AdminAlert.relationship = [
  'data:admin_alerts'
]

module.exports = AdminAlert
