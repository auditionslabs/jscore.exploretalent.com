'use strict';

var _ = require('lodash');

function DummyModel2(data) {
	_.extend(this, data);
}

DummyModel2.relationship = [
	'dummy_model3'
];

module.exports = DummyModel2;
