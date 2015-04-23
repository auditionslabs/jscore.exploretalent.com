'use strict';

var _ = require('lodash'),
	$ = require('jquery'),

	REST = require('src/services/rest.js');

describe('SERVICES: REST', function() {

	var requestSpy,
		responseSpy,
		responseSuccessSpy,
		responseErrorSpy;

	beforeEach(function() {
		requestSpy = jasmine.createSpy().and.callFake(_.identity);
		responseSuccessSpy = jasmine.createSpy().and.callFake(_.identity);
		responseErrorSpy = jasmine.createSpy().and.callFake(_.identity);
		responseSpy = jasmine.createSpy().and.callFake(_.identity);

		REST.interceptors.push({
			request: requestSpy,
			response: responseSpy,
			responseSuccess: responseSuccessSpy,
			responseError: responseErrorSpy
		});
	});

	afterEach(function() {
		REST.interceptors = [];
	});

	describe('runInterceptors', function() {

		it('should return data passed from request, response, responseSuccess, responseError', function() {
			var data = { dummy_key: 'dummy-value' };
			expect(REST.$$runInterceptors(data, 'request')).toEqual(data);
			expect(REST.$$runInterceptors(data, 'response')).toEqual(data);
			expect(REST.$$runInterceptors(data, 'responseSuccess')).toEqual(data);
			expect(REST.$$runInterceptors(data, 'responseError')).toEqual(data);
		});

	});

	describe('restMethod()', function() {

		it('should return an object with a key `method` associated with a function value', function() {
			var object = REST.$$restMethod({}, 'method');
			expect(_.isFunction(object.method)).toBeTruthy();
		});

	});

	describe('request methods', function() {

		var ajax,
			deferred;

		beforeEach(function() {
			ajax = $.ajax;
			$.ajax = jasmine.createSpy().and.callFake(function(settings) {
				deferred = $.Deferred();
				return deferred;
			});
		});

		afterEach(function() {
			$.ajax = ajax;
		});

		describe('get, post, put, patch, and delete methods', function() {

			var methods, dummyObject;

			beforeEach(function() {
				methods = _(['get', 'post', 'put', 'patch', 'delete']);
				dummyObject = { dummy: 'value' };
			});

			it('should exist', function() {

				methods.each(function(method) {
					expect(_.isFunction(REST[method])).toBeTruthy();
				}).commit();

			});

			it('should call request interceptor', function() {
				methods.each(function(method) {
					REST[method]('/dummy-url', dummyObject);
					expect(requestSpy).toHaveBeenCalledWith({
						url: '/dummy-url',
						type: method,
						data: dummyObject
					});
				}).commit();
			});

			it('should call response interceptor when ajax request is resolved', function() {
				methods.each(function(method) {
					REST[method]('/dummy-url', {});
					deferred.resolve(dummyObject);
					expect(responseSpy.calls.mostRecent().args[0]).toEqual(dummyObject);
				}).commit();
			});

			it('should call response interceptor when ajax request is rejected', function() {
				methods.each(function(method) {
					var spy = jasmine.createSpy();
					REST[method]('/dummy-url', {});
					deferred.reject(dummyObject);
					expect(responseSpy.calls.mostRecent().args[0]).toEqual(dummyObject);
				}).commit();
			});

			it('should call response error interceptor when ajax request is rejected', function() {
				methods.each(function(method) {
					var spy = jasmine.createSpy();
					REST[method]('/dummy-url', {}).then(null, spy);
					deferred.reject(dummyObject);
					expect(spy).toHaveBeenCalledWith(dummyObject);
					expect(responseErrorSpy.calls.mostRecent().args[0]).toEqual(dummyObject);
				}).commit();
			});

			it('should not call response error interceptor when ajax request is resolved', function() {
				methods.each(function(method) {
					var spy = jasmine.createSpy();
					REST[method]('/dummy-url', {}).then(null, spy);
					deferred.resolve(dummyObject);
					expect(spy).not.toHaveBeenCalledWith(dummyObject);
					expect(responseErrorSpy).not.toHaveBeenCalled();
				}).commit();
			});

			it('should call response success interceptor when ajax request is resolved', function() {
				methods.each(function(method) {
					var spy = jasmine.createSpy();
					REST[method]('/dummy-url', {}).then(spy);
					deferred.resolve(dummyObject);
					expect(spy).toHaveBeenCalledWith(dummyObject);
					expect(responseSuccessSpy.calls.mostRecent().args[0]).toEqual(dummyObject);
				}).commit();
			});

			it('should not call response success interceptor when ajax request is rejected', function() {
				methods.each(function(method) {
					var spy = jasmine.createSpy();
					REST[method]('/dummy-url', {}).then(spy);
					deferred.reject(dummyObject);
					expect(spy).not.toHaveBeenCalledWith(dummyObject);
					expect(responseErrorSpy).not.toHaveBeenCalled();
				});
			});

		});


	});

});
