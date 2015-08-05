'use strict';

var api = require('src/config/api.js'),
	Resource = require('src/services/resource.js');

module.exports = new Resource(api.base + '/talent/casting_categories/:castingCategoryId', {
	model: 'bam_cast_cat'
});
