'use strict';

var  _ = require('lodash'),
	resumeExperience = require('src/values/resume_experience'),
	resumePerformance = require('src/values/resume_performance'),
	talent = {
		getExperience: getExperience,
		getPerformance: getPerformance,
		getHeight: getHeight,
		formatFeetInchesFromInches: formatFeetInchesFromInches,
		getFullName: getFullName
	};

function getExperience(experience) {
	return resumeExperience[experience] || '';
}

function getPerformance(performance) {
	return resumePerformance[performance] || '';
}

function getHeight(inches) {
	var feet = Math.floor(inches / 12);
	inches %= 12;

	feet = (feet || 0) + '\'';
	inches = (inches || 0) + '"';
	return feet + ' ' + inches;
}

function getFullName(fname, lname) {
	return _.compact([fname || '', lname || '']).join(' ');
}

module.exports = talent;
