'use strict'

let api = require('src/config/api.js'),
  Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/bad_accounts/:talentnum', {
  model: 'bad_account'
})
