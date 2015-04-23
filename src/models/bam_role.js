'use strict';

var _ = require('lodash');

function Role(data) {
	_.extend(this, data);
}

module.exports = Role;
