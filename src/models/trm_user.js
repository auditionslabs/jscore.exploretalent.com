'use strict';

var _ = require('lodash');

function TrmUser(data) {
	_.extend(this, data);
}

module.exports = TrmUser;