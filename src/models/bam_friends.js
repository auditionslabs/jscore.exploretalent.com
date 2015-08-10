'use strict';

var _ = require('lodash'),
	friends = {},
	Friend = require('./bam_friend.js');

friends.relationship = Friend.relationship;

friends.create = function(array) {
	var modelify = require('../services/model.js');

	return _.map(array || [], function(item) {
		return modelify('bam_friend', item);
	});
};

module.exports = friends;
