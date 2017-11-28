'use strict'

var _ = require('lodash')

function SenderOption(data) {
  _.extend(this, data || {})
}

SenderOption.relationship = [
  'data:sender_options'
]

module.exports = SenderOption
