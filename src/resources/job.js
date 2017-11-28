'use strict'

var api = require('src/config/api.js'),
  Resource = require('src/services/resource.js')

if (api.type == '/cd')
  module.exports = new Resource(api.base + api.type + '/projects/:projectId/jobs/:jobId', { model : 'bam_role' })
else
  module.exports = new Resource(api.base + api.type + '/jobs/:jobId', { model : 'bam_role' })
