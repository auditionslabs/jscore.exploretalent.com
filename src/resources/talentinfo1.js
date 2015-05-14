'use strict';

var api = require('src/config/api.js'),
	Resource = require('src/services/resource.js');

module.exports = new Resource(api.base + '/talent/talentinfo1/:talentId', {
	model: 'bam_talentinfo1'
});
