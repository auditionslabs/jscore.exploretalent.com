'use strict';

var api = require('src/config/api.js'),
	Resource = require('src/services/resource.js');

module.exports = new Resource(api.base + '/talent/favorite_projects/:projectId', {
	model: 'bam_favorite_castings'
});