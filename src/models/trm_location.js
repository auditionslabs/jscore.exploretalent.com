
'use strict'

let _ = require('lodash')

function Locations (data) {
  _.extend(this, data || {})
}

module.exports = Locations
