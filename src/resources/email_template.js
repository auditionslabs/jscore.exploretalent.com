'use strict';

var api = require('src/config/api.js'),
	Resource = require('src/services/resource.js');

module.exports = new Resource(api.base + api.type + '/email_templates/:emailTemplateId', {
	model: 'email_template'
});