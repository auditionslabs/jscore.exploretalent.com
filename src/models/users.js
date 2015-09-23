var _ = require('lodash'),
	users = {},
	User = require('src/models/user.js');

users.relationship = User.relationship;

users.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('user', item);
	});
};

module.exports = users;
