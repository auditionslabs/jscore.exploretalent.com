'use strict'

var api = require('src/config/api.js'),
  Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/talentinfo2/:talentId', {
  model: 'bam_talentinfo2'
})
