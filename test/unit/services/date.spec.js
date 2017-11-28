'use strict'

var date = require('src/services/date.js')

describe('SERVICES: date', function () {
  describe('toUnixTimeStamp()', function () {
    it('should return a 10 digit unix timestamp for April 22, 2015', function () {
      var dateString = '2015-04-22',
        timestamp = date.toUnixTimeStamp(dateString)

      expect(timestamp).toBe(new Date(dateString) / 1000)
    })
  })

  describe('formatYMD()', function () {
    it('should format unix timestamp to yyyy-mm-dd', function () {
      var dateString = '2015-04-22',
        timestamp = new Date(dateString) / 1000

      expect(date.formatYMD(timestamp)).toBe(dateString)
      expect(date.formatYMD()).toBe('1970-01-01')
    })
  })

  describe('calculateAge()', function () {
    var now

    beforeEach(function () {
      now = Date.now
      Date.now = jasmine.createSpy().and.callFake(function () {
        return new Date('2014-04-22')
      })
    })

    afterEach(function () {
      Date.now = now
    })

    it('should calculate the age given a date of birth of 1989-05-15 from 2014-04-22', function () {
      expect(date.calculateAge(1989, 5, 15)).toBe(24)
    })
  })

  describe('now()', function () {
    var now

    beforeEach(function () {
      now = Date.now
      Date.now = jasmine.createSpy().and.callFake(function () {
        return new Date('2014-04-22')
      })
    })

    afterEach(function () {
      Date.now = now
    })

    it('should return the current date', function () {
      expect(date.now()).toEqual({
        year: 2014,
        month: 4,
        day: 22
      })
    })
  })
})
