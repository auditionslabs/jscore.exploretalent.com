'use strict';

var _ = require('lodash');

function Feedback(data) {
	_.extend(this, data || {});
}

Feedback.relationship = [
	'data:feedbacks'
];

module.exports = Feedback;
