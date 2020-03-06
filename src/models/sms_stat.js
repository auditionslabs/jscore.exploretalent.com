'use strict'

let _ = require('lodash')

function SmsStat (data) {
  _.extend(this, data || {})
}

module.exports = SmsStat
