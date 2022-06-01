'use strict'

let api = require('src/config/api.js'),
  Resource = require('src/services/resource.js')

module.exports = new Resource(api.baseV2 + api.type + '/pictures_for_approval', {
  model: 'campaign_app'
})
