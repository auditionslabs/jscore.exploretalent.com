'use strict'

let api = require('src/config/api.js'),
  Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/trm_scripts/:scriptId', {
  model: 'trm_script'
})
