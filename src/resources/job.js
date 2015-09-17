'use strict';

var project = require('./project.js'),
	Resource = require('src/services/resource.js');

Resource.prototype.getLikeItList = function() {
	console.log('test');
}

module.exports = project.child('/jobs/:jobId');
