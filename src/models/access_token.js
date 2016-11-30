'use strict';

var _ = require('lodash');

function AccessToken(data) {
	_.extend(this, data || {});
}

module.exports = AccessToken;
