'use strict';

var _ = require('lodash');

function User(data) {
	_.extend(this, data);
}

User.relationship = [
	'bam_talentci',
	'bam_cd_user',
	'schedules',
	'invitations:schedules',
	'media:medias'
];

module.exports = User;
