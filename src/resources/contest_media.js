'use strict';

var api = require('src/config/api.js'),
	Resource = require('src/services/resource.js');

module.exports = new Resource(api.base + api.type + '/et_contest/contest_media/:mediaId', {
	model: 'contest_media'
});
