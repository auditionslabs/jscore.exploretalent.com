'use strict'

let api = require('src/config/api.js'),
  Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/talent_general/:talentGeneralId', {
  model: 'talent_general'
})
