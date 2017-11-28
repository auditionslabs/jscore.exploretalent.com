'use strict'

let _ = require('lodash')

function StaffNote (data) {
  _.extend(this, data)
}

module.exports = StaffNote
