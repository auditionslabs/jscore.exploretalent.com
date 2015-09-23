'use strict';

var _ = require('lodash'),
	date = require('src/services/date.js');

function Project(data) {
	_.extend(this, data);
}

Project.prototype.convertAsapToFullDate = function() {
	return date.formatYMD(parseInt(this.asap));
};

Project.prototype.convertAudToFullDate = function() {
	return date.formatYMD(parseInt(this.aud_timestamp));
};

Project.prototype.convertSubToFullDate = function() {
	return date.formatYMD(parseInt(this.sub_timestamp));
};

Project.prototype.convertShootToFullDate = function() {
	return date.formatYMD(parseInt(this.shoot_timestamp));
};


module.exports = Project;
