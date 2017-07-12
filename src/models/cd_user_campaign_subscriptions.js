'use strict';

var _ = require('lodash'),
	subscriptions = {};


subscriptions.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('cd_user_campaign_subscription', item);
	});
};

module.exports = subscriptions;
