'use strict'

let _ = require('lodash')

function Team (data) {
  _.extend(this, data)
}

module.exports = Team
