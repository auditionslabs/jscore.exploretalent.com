'use strict';

var $ = require('jquery'), _ = require('lodash'),

	REST = {};

//set up ajax to use cross domain
$.ajaxSetup({
	xhrFields : {
		withCredentials : true
	},
	crossDomain : true
});

REST.interceptors = [{
	request: _.identity,
	response: _.identity,
	responseSuccess: _.identity,
	responseError: _.identity
}];
REST.settings = {};

REST.$$runInterceptors = runInterceptors;
REST.$$restMethod = restMethod;

function runInterceptors(interceptors, data, name, context) {
	data = (_.isArray(data) || _.isArguments(data))? data: [data];
	return _.reduce(interceptors, function(newData, interceptor) {
		var fn = (interceptor[name] || _.identity);
		return fn.apply(context, data);
	}, data);
}

function restMethod(object, method) {

	object[method] = function(url, data, settings) {

		var promise, config, interceptors;

		settings = _.clone(settings || {});

		config = {
			url: url,
			type: method,
			data: data
		};

		if(settings.interceptors) {
			interceptors = settings.interceptors;
			delete settings.interceptors;
		} else {
			interceptors = [];
		}

		//replaced line below to foreach
		//interceptors = interceptors.concat(REST.interceptors);
		_(interceptors).forEach(function(n) {
			n = _.assign(n, REST.interceptors[0]);
		}, interceptors);
		config = _.assign(config, settings, REST.settings);

		config = runInterceptors(interceptors, config, 'request', this);

		promise = $.ajax(config).then(function() {
			return runInterceptors(interceptors, arguments, 'responseSuccess', this);
		}, function() {
			return runInterceptors(interceptors, arguments, 'responseError', this);
		});

		promise.always(function() {
			runInterceptors(interceptors, arguments, 'response', this);
		});

		return promise;

	};

	return object;

}


REST.$$methods = [ 'put', 'patch', 'delete', 'get', 'post' ];

REST = _.reduce(REST.$$methods, restMethod, REST);

module.exports = REST;
