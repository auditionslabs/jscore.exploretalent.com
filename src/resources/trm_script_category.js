'use strict'

var api = require('src/config/api.js'),
  Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/trm_script_categories/:scriptCategoryId', {
  model: 'trm_script_category'
})
