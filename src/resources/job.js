'use strict';

var api = require('src/config/api.js'),
	Resource = require('src/services/resource.js'),
	project = require('src/resources/project.js');

if (api.type == '/admin') {
	module.exports = new Resource(api.base + api.type + '/jobs/:jobId', { model : 'bam_role' });
}
else {
	module.exports = project.child('/jobs/:jobId', { model : 'bam_role' });
}
