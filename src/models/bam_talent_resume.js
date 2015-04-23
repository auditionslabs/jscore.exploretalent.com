'use strict';

var _ = require('lodash');

TalentResume.$$resumeTypes = require('../values/resume_types');

function TalentResume(data) {

	var resumeTypes = TalentResume.$$resumeTypes;

	var object = _.reduce(data, function(object, value, key) {
		object[resumeTypes[value.type]] = value;
		return object;
	}, {});

	_.each(resumeTypes, function(value, key) {
		object[value] = object[value] || {};
	});

	_.extend(this, object);

}

module.exports = TalentResume;
