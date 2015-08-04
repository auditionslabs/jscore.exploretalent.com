'use strict';

var api = require('src/config/api.js'),
	Resource = require('src/services/resource.js');

module.exports = new Resource(api.base + '/talent/cd_user/:cdUserId', {
	model: 'bam_cd_user'
});
