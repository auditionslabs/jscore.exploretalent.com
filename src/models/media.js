'use strict'

let _ = require('lodash')

function Media (data) {
  _.extend(this, data)
}

module.exports = Media
