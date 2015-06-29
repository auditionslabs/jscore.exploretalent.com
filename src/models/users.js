var _ = require('lodash'),
	users = {},
	User = require('./user.js');

users.relationship = User.relationship;

users.create = function(array) {
	return _.map(array || [], function(item) {
		return new User(item);
	});
};

module.exports = users;
