'use strict';

var api = require('src/config/api.js'),
	Resource = require('src/services/resource.js');

module.exports = new Resource(api.base + '/talent/talent_social/:talentId', {
	model: 'bam_talent_social'
});
