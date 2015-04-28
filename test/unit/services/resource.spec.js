'use strict';

var Resource = require('src/services/resource.js'),
	REST = require('src/services/rest.js'),
	User = require('src/models/user.js'),
	_ = require('lodash'),
	$ = require('jquery');

describe('SERVICES: Resource', function() {

	var resource,
		url,
		data,
		settings;

	beforeEach(function() {
		settings = {dummy: 'value'};
		url =  '/users/:userId';
		data = { userId: '1' };
		resource = new Resource('/users/:userId', settings);
	});

	describe('constructor', function() {

		it('should set $$url', function() {
			expect(resource.$$url).toBe(url);
		});

		it('should set $$settings', function() {
			expect(resource.$$settings).toEqual(settings);
		});

		it('should set $$settings with an empty object when settings is undefined', function() {
			expect(new Resource(url).$$settings).toEqual({});
		});

		it('should set $$keys', function() {
			expect(resource.$$keys).toEqual([':userId']);
		});

	});

	describe('interpolate()', function() {

		var params;

		beforeEach(function() {
			params = resource.interpolate(data);
		});

		it('should return a `data` key value without the keys to be interpolated', function() {
			expect(params.data).toEqual({});
		});

		it('should return a `url` key value with the interpolated `data` values', function() {
			expect(params.url).toBe('/users/1');
		});

		it('should return a `url` removed with double forward slashes left by undefined key values', function() {
			var child = resource.child('/projects/:projectId');
			params = child.interpolate({ projectId: '1' });
			expect(params.url).toBe('/users//projects/1');
		});

	});

	describe('child()', function() {

		var child,
			childSettings;

		beforeEach(function() {
			childSettings = { childDummy: 'childValue' };
			child = resource.child('/projects/:projectId', childSettings);
		});

		it('should have a url with it\'s parent url prepended', function() {
			expect(child.$$url).toBe('/users/:userId/projects/:projectId');
		});

		it('should set $$settings', function() {
			expect(child.$$settings).toEqual(childSettings);
		});

		it('should be an instance of a Resource', function() {
			expect(child instanceof Resource).toBeTruthy();
		});

	});

	describe('RESTful methods', function() {

		var methods,
			restMethodValue,
			deferred;

		beforeEach(function() {
			restMethodValue = {};
			deferred = $.Deferred();
			methods = _(REST.$$methods).reduce(function(object, method) {
				object[method] = REST[method];
				REST[method] = jasmine.createSpy().and.returnValue(deferred.promise());
				return object;
			}, {});
			deferred.resolve(restMethodValue);
		});

		afterEach(function() {
			_.each(methods, function(method, key) {
				REST[key] = method;
			});
		});

		it('should call the REST methods with the interpolated url, cleaned data and extended settings', function() {

			var newSettings = { other: 'value' };

			_.each(REST.$$methods, function(method) {
				resource[method](data, newSettings);
				expect(REST[method]).toHaveBeenCalledWith(
					'/users/1',
					{},
					{ dummy: 'value', other: 'value' }
				);
			});

		});

		describe('with fake ajax', function() {

			var ajax,
				deferred;

			beforeEach(function() {
				deferred = $.Deferred();
				ajax = $.ajax;
				$.ajax = jasmine.createSpy().and.returnValue(deferred);
				deferred.resolve({});
			});

			afterEach(function() {
				$.ajax = ajax;
			});

			it('should transform data into a User object when a model is provided', function() {

				var newResource = new Resource('/users/:userId', { model: 'user' });

				_.each(REST.$$methods, function(method) {
					var spy = jasmine.createSpy();
					newResource[method]({}).then(spy);
					// expect(spy.calls.mostRecent().args[0] instanceof User).toBeTruthy();
				});

			});

		});


	});

});
