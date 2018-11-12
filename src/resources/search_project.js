'use strict'

let api = require('src/config/api.js'),
  Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + '/search/projects/:id', {
  model: 'bam_casting'
})
