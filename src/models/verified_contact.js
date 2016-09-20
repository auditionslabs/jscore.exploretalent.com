'use strict';

var _ = require('lodash');

function VerifiedContact(data) {
	_.extend(this, data || {});
}

VerifiedContact.relationship = [
	'data:verified_contacts'
];

module.exports = VerifiedContact;