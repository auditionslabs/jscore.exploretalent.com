'use strict';

var api = require('src/config/api.js'),
	Resource = require('src/services/resource.js');

if (api.type == '/admin') {
	module.exports = new Resource(api.base + api.type + '/schedules/:scheduleId', {
		model: 'schedule'
	});
}
else {
	module.exports = new Resource(api.base + api.type + '/jobs/:jobId/schedules/:scheduleId', {
		model: 'schedule'
	});
}
