'use strict';

var _ = require('lodash'),
	converter = require('../services/converter.js');

function Friends(data) {
	_.extend(this, data);
}

Friends.relationship = [
	'bam_talentci1:bam_talentci',
	'bam_talentci2:bam_talentci',
	'data:bam_friends'
];

module.exports = Friends;
