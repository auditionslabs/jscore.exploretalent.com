'use strict';

var api = require('src/config/api.js'),
	Resource = require('src/services/resource.js');

module.exports = new Resource(api.base + api.type + '/vicidial/agent_logs/:agentLogId', {
	model: 'vicidial_agent_log'
});
