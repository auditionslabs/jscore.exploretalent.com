'use strict';

var api = require('src/config/api.js'),
	Resource = require('src/services/resource.js');

module.exports = new Resource(api.base + api.type + '/talentci/:talentci/call_logs/:id', {
	model: 'trm_call_log'
});
