'use strict';

var _ = require('lodash');

function BadAccounts(data) {
	_.extend(this, data || {});
}

BadAccounts.relationship = [
	'data:bad_accounts'
];

module.exports = BadAccounts;
