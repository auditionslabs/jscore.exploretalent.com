'use strict';

var _ = require('lodash');

function CallBack(data) {
	_.extend(this, data);
}

module.exports = CallBack;