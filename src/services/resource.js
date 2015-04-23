'use strict';

var REST = require('./rest.js'),
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
			}
			return url;
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

		return REST[method](params.url, params.data, newSettings);
	};

});

module.exports = Resource;
