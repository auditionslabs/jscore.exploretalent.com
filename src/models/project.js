'use strict';

var _ = require('lodash'),
	date = require('../services/date.js');

function Project(data) {
	_.extend(this, data);
}

Project.prototype.convertToFullDate = function(timestamp) {
	return date.formatYMD(parseInt(timestamp));
};

Project.prototype.heightText = function() {
	var feet = Math.floor(this.bam_talentinfo1.heightinches / 12.00);
	var inches = feet * 12;
	return feet + '"' + inches + "'";
}

Project.prototype.getLocation = function() {
	if (this.bam_talentinfo2 && this.bam_talentinfo2.city1) {
		return this.bam_talentinfo2.city1;
	}
	else if(this.city && this.state && this.state.length > 2) {
		return this.city + ', ' + this.state;
	}
	else if(this.state && this.state.length > 2) {
		return this.city;
	}
	else {
		return 'Not Set';
	}
}

Project.prototype.getAge = function() {
	return date.calculateAge(this.bam_talentinfo1.dobyyyy, this.bam_talentinfo1.dobmm, this.bam_talentinfo1.dobdd);
}

module.exports = Project;
