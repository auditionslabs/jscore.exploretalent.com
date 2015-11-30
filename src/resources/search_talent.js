'use strict';

var api = require('src/config/api.js'),
	Resource = require('src/services/resource.js');

module.exports = new Resource(api.base + '/search/talents', {
	model: 'search_talent'
});
