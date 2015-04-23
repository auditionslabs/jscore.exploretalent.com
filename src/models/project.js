'use strict';

var _ = require('lodash');

function Project(data) {
	_.extend(this, data);
}

module.exports = Project;
