'use strict';

var _ = require('lodash');

function StaffNote(data) {
	_.extend(this, data);
}

module.exports = StaffNote;