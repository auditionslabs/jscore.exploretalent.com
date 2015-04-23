'use strict';

var _ = require('lodash'),
	DummyModel4 = require('./dummy_model4.js');

function DummyModel4Many(data) {
	_.extend(this, data);
}

DummyModel4Many.create = function(data) {
	return _.map(data, function() {
		return new DummyModel4(data);
	});
};

module.exports = DummyModel4Many;
