'use strict';

var _ = require('lodash');

function Banners(data) {
	_.extend(this, data || {});
}

module.exports = Banners;
