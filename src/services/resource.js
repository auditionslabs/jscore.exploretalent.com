'use strict';

var REST = require('./rest.js'),
	model = require('./model.js'),
	_ = require('lodash');

function Resource(url, settings) {
	var self = this;
	self.$$url = url;
	self.$$settings = settings || {};
	self.$$keys = url.replace(/.*:\/\//g, '').match(/:[a-zA-Z]+/g);
}

Resource.prototype.interpolate = function(data) {
	var self = this;
	data = _.clone(data);
	return {
		url: _(self.$$keys).reduce(function(url, key) {
			var dataKey = key.substring(1);
			if(data[dataKey]) {
				url = url.replace(key, data[dataKey]);
				delete data[dataKey];
			} else {
				url = url.replace(key, '');
			}
			return url.replace(/\/$/, "");
		}, self.$$url),
		data: data
	};
};

Resource.prototype.child = function(url, settings) {
	return new Resource(this.$$url + url, settings);
};

_.each(REST.$$methods, function(method) {

	Resource.prototype[method] = function(data, settings) {
		var self = this,
			params = self.interpolate(data),
			newSettings = _.assign({}, settings, self.$$settings);

		if(newSettings.model) {
			//changed interceptors to interceptor
			newSettings.interceptors = [{
				responseSuccess: _.partial(model, newSettings.model)
			}];
			delete newSettings.model;
		}

		return REST[method](params.url, params.data, newSettings);
	};

});

module.exports = Resource;
