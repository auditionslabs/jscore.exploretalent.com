'use strict';

var _ = require('lodash'),
	talentHelper = require('src/services/talent.js');

function CdUser(data) {
	_.extend(this, data || {});
}

CdUser.prototype.getFullName = function() {
	return talentHelper.getFullName(this.fname, this.lname);
};

CdUser.relationship = [
	'user'
];

module.exports = CdUser;
