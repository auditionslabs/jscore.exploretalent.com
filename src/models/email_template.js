'use strict';

var _ = require('lodash');

function EmailTemplate(data) {
	_.extend(this, data || {});
}

EmailTemplate.relationship = [
	'data:email_templates'
];

module.exports = EmailTemplate;
