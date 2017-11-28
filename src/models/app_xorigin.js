'use strict'

var _ = require('lodash')

function AppXorigins(data) {
  _.extend(this, data || {})
}

AppXorigins.relationship = [
  'data:app_xorigins'
]

module.exports = AppXorigins
