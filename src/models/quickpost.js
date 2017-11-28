'use strict'

let _ = require('lodash')

function Quickpost (data) {
  _.extend(this, data || {})
}

Quickpost.relationship = [
  'data:quickposts'
]

module.exports = Quickpost
