'use strict'

let _ = require('lodash')

function DidLog (data) {
  _.extend(this, data)
}

module.exports = DidLog
