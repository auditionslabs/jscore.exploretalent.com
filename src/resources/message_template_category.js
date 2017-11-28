'use strict'

var api = require('src/config/api.js'),
  Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/message_template_categories/:categoryId', {
  model: 'message_template_category'
})
