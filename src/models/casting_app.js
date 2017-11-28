'use strict'

let _ = require('lodash')

function CastingApp (data) {
  _.extend(this, data)
}

module.exports = CastingApp
