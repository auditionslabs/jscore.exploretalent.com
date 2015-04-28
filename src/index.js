'use strict';

var _ = require('lodash');

function Core() {
	this.$$configs = [];
	this.$$runs = [];
}

Core.prototype.config = function(callback) {
	this.$$configs.push(callback);
};

Core.prototype.run = function(callback) {
	this.$$runs.push(callback);
};

Core.prototype.initialize = function() {

	var configs = require('./config/**/*.js', { hash: true });
	var values = require('./values/**/*', { hash: true });

	while(this.$$configs.length > 0) {
		this.$$configs.shift()({
			config: configs,
			value: values
		});
	}

	var services = require('./services/**/*.js', { hash: true });
	var resources = require('./resources/**/*.js', { hash: true });

	while(this.$$runs.length > 0) {
		this.$$runs.shift()({
			service: services,
			resource: resources,
			value: values,
			config: configs
		});
	}

};

module.exports = new Core();
