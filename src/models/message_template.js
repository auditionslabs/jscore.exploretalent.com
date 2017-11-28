'use strict'

let _ = require('lodash')

function MessageTemplate (data) {
  _.extend(this, data || {})
}

MessageTemplate.relationship = [
  'data:message_templates'
]

module.exports = MessageTemplate
