'use strict';

var _ = require('lodash');

function User(data) {
	_.extend(this, data);
}

User.prototype.getMediaByType = function(t) {
	return _.where(this.media, { media_type_id : t });
};

User.relationship = [
	'bam_talentci',
	'bam_cd_user',
	'schedules',
	'invitations:schedules',
	'media:medias'
];

module.exports = User;
