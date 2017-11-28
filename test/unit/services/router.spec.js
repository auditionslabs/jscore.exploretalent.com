'use strict'

var router = require('src/services/router.js'),
  crossroads = require('crossroads'),
  _ = require('lodash')

describe('SERVICES: router', function() {

  describe('constructor', function() {

    it('should add initial instance properties', function() {
      expect(router.$$controllers).toEqual({})
      expect(router.$$params).toEqual([])
    })

  })

  describe('add()', function() {

    var addRoute, params

    beforeEach(function() {
      router.$$controllers = {
        'DummyController': jasmine.createSpy(),
      }

      params = [ 1, 2, 3 ]

      router.$$params = params
    })

    describe('when addRoute() is mocked', function() {

      beforeEach(function() {
        addRoute = crossroads.addRoute
        crossroads.addRoute = jasmine.createSpy()
      })

      afterEach(function() {
        crossroads.addRoute = addRoute
      })

      it('should add a crossroads route with an existent controller', function() {
        router.add('/dummy-url', 'DummyController')
        expect(crossroads.addRoute).toHaveBeenCalled()
        expect(_.isFunction(crossroads.addRoute.calls.mostRecent().args[1])).toBeTruthy()
      })

      it('should not add crossroads route without an existent controller', function() {
        router.add('/dummy-url', 'ControllerThatDoesNotExist')
        expect(crossroads.addRoute).not.toHaveBeenCalled()
      })

    })

    it('should call the controller callback with the default parameters', function() {
      router.add('/dummy-url/{userId}', 'DummyController')
      crossroads.parse('/dummy-url/me')
      expect(router.$$controllers.DummyController).toHaveBeenCalledWith(1, 2, 3, 'me')
    })

    it('should return the router instance', function() {
      expect(router.add('/dummy-url', 'DummyController') === router).toBeTruthy()
    })

  })

  describe('finalize()', function() {

    var parse

    beforeEach(function() {
      parse = crossroads.parse
      crossroads.parse = jasmine.createSpy()
    })

    afterEach(function() {
      crossroads.parse = parse
    })

    it('should call crossroads.parse', function() {
      router.finalize()
      expect(crossroads.parse).toHaveBeenCalledWith(window.location.pathname)
    })

  })

})
