'use strict'

var _ = require('lodash')

function MessageTemplateCategory(data) {
  _.extend(this, data || {})
}

MessageTemplateCategory.relationship = [
  'data:message_template_categories'
]

module.exports = MessageTemplateCategory
