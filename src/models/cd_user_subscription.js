'use strict';

var _ = require('lodash');

function Subscription(data) {
	_.extend(this, data);
}

Subscription.relationship = [
	'data:cd_user_subscriptions'
];
module.exports = Subscription;
