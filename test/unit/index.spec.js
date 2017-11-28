'use strict'

var index = require('src/index.js'),
	configs = require('../../src/config/**/*.js', { hash: true }),
	values = require('../../src/values/**/*', { hash: true }),
	services = require('../../src/services/**/*.js', { hash: true }),
	resources = require('../../src/resources/**/*.js', { hash: true }),

	_ = require('lodash')

describe('Index', function() {

	describe('config()', function() {

		it('should register configuration callbacks', function() {
			var callback = _.noop
			index.config(callback)
			expect(index.$$configs.pop()).toBe(callback)
		})

	})

	describe('run()', function() {

		it('should register run callbacks', function() {
			var callback = _.noop
			index.run(callback)
			expect(index.$$runs.pop()).toBe(callback)
		})

	})

	describe('initialize()', function() {

		var configSpy, runSpy

		beforeEach(function() {
			configSpy = jasmine.createSpy()
			runSpy = jasmine.createSpy()

			index.config(configSpy)
			index.run(runSpy)
		})

		it('should execute config callbacks', function() {
			index.initialize()
			expect(configSpy).toHaveBeenCalled()
			expect(configSpy.calls.mostRecent().args[0]).toEqual({
				config: configs,
				value: values
			})
			expect(index.$$configs.length).toBe(0)
		})

		it('should execute run callbacks', function() {
			index.initialize()
			expect(runSpy).toHaveBeenCalled()
			expect(runSpy.calls.mostRecent().args[0]).toEqual({
				service: services,
				resource: resources,
				value: values,
				config: configs
			})
		})

	})

})
