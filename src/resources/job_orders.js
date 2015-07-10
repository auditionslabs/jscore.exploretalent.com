'use strict';

var api = require('src/config/api.js'),
	Resource = require('src/services/resource.js');

module.exports = new Resource(api.base + '/talent/job_orders/:jobId', {
	model: 'bam_job_order'
});
