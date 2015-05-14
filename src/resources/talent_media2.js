'use strict';

var api = require('src/config/api.js'),
	Resource = require('src/services/resource.js');

module.exports = new Resource(api.base + '/talent/talent_media2/:id', {
	model: 'bam_talent_media2'
});
