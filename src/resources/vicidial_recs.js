'use strict';

var api = require('src/config/api.js'),
	Resource = require('src/services/resource.js');

module.exports = new Resource(api.base + api.type + '/et/vicidial_recs', {
	model: 'vicidial_recs'
});
