'use strict';

var $ = require('jquery'),
	_ = require('lodash'),

	REST = {};

REST.interceptors = [];
REST.settings = {};

REST.$$runInterceptors = runInterceptors;
REST.$$restMethod = restMethod;

function runInterceptors(data, name, context) {
	data = (_.isArray(data) || _.isArguments(data))? data: [data];
	return _.reduce(REST.interceptors, function(newData, interceptor) {
		var fn = (interceptor[name] || _.identity);
		return fn.apply(context, data);
	}, data);
}

function restMethod(object, method) {

	object[method] = function(url, data, settings) {

		var promise, config;

		settings = settings || {};

		config = {
			url: url,
			type: method,
			data: data
		};

		_.extend(config, settings);

		config = runInterceptors(config, 'request', this);

		promise = $.ajax(config).then(function() {
			return runInterceptors(arguments, 'responseSuccess', this);
		}, function() {
			return runInterceptors(arguments, 'responseError', this);
		});

		promise.always(function() {
			runInterceptors(arguments, 'response', this);
		});

		return promise;

	};

	return object;

}


REST = _.reduce([ 'put', 'patch', 'delete', 'get', 'post' ], restMethod, REST);

module.exports = REST;
