'use strict'

let api = require('src/config/api.js'),
  Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/oauth/access_token/:tokenId', {
  model: 'access_token'
})
