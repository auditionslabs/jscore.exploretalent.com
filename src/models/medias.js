'use strict';

var _ = require('lodash'),
	medias = {},
	Media = require('./media.js');

medias.relationship = Media.relationship;

medias.create = function(array) {
	return _.map(array || [], function(item) {
		return new Media(item);
	});
};

module.exports = medias;
