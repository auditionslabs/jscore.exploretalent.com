'use strict'

let api = require('src/config/api.js'),
  Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/future_recurring/:talentnum', {
  model: 'future_recurring'
})
