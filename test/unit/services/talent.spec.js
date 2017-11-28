'use strict'

var talent = require('src/services/talent.js'),
  resumeExperience = require('src/values/resume_experience'),
  resumePerformance = require('src/values/resume_performance'),

  _ = require('lodash')

describe('SERVICES: talent', function() {

  describe('getExperience()', function() {

    it('should return labels associated from `values/resume_experience.json`', function() {
      _.each(resumeExperience, function(value, key) {
        expect(talent.getExperience(key)).toBe(value)
      })
    })

    it('should return an empty string when key not associated from `values/resume_experience.json` is provided', function() {
      expect(talent.getExperience(undefined)).toBe('')
    })

  })

  describe('getPerformance()', function() {

    it('should return labels associated from `values/resume_performance.json`', function() {
      _.each(resumePerformance, function(value, key) {
        expect(talent.getPerformance(key)).toBe(value)
      })
    })

    it('should return an empty string when key not associated from `values/resume_performance.json` is provided', function() {
      expect(talent.getPerformance(undefined)).toBe('')
    })

  })

  describe('getHeight()', function() {

    it('should return `10\' 0"` when feet is equal to 10 and inches is falsy', function() {
      var format = '10\' 0"'
      expect(talent.getHeight(10, 0)).toBe(format)
      expect(talent.getHeight(10)).toBe(format)
      expect(talent.getHeight(10, false)).toBe(format)
      expect(talent.getHeight(10, null)).toBe(format)

      expect(talent.getHeight(10, 1)).not.toBe(format)
    })

    it('should return `0\' 5"` when feet is falsy and inches is equal to 5', function() {
      var format = '0\' 5"'
      expect(talent.getHeight(0, 5)).toBe(format)
      expect(talent.getHeight(undefined, 5)).toBe(format)
      expect(talent.getHeight(false, 5)).toBe(format)
      expect(talent.getHeight(null, 5)).toBe(format)

      expect(talent.getHeight(10, 5)).not.toBe(format)
    })

  })

  describe('formatFeetInchesFromInches()', function() {

    beforeEach(function() {
      talent.getHeight = jasmine.createSpy().and.returnValue('dummy-height-value')
    })

    it('should return talent.getHeight()\'s value', function() {
      expect(talent.formatFeetInchesFromInches()).toBe('dummy-height-value')
    })

    it('should call talent.getHeight(10, 5) when inches is equal to 125', function() {
      talent.formatFeetInchesFromInches(125)
      expect(talent.getHeight).toHaveBeenCalledWith(10, 5)
    })

    it('should call talent.getHeight(5, 0) when inches is equal to 60', function() {
      talent.formatFeetInchesFromInches(60)
      expect(talent.getHeight).toHaveBeenCalledWith(5, 0)
    })

  })

  describe('getFullName()', function() {

    var fname, lname

    beforeEach(function() {
      fname = 'Mark'
      lname = 'Johnson'
    })

    describe('when first name is falsy', function() {

      it('should return the last name only', function() {
        expect(talent.getFullName(0, lname)).toBe(lname)
        expect(talent.getFullName(false, lname)).toBe(lname)
        expect(talent.getFullName(undefined, lname)).toBe(lname)
        expect(talent.getFullName(null, lname)).toBe(lname)

        expect(talent.getFullName(fname, lname)).not.toBe(lname)
      })

    })

    describe('when last name is falsy', function() {

      it('should return the last name only', function() {
        expect(talent.getFullName(fname, 0)).toBe(fname)
        expect(talent.getFullName(fname, false)).toBe(fname)
        expect(talent.getFullName(fname)).toBe(fname)
        expect(talent.getFullName(fname, null)).toBe(fname)

        expect(talent.getFullName(fname, lname)).not.toBe(fname)
      })

    })

    describe('when first name and last name is defined', function() {

      it('should return the first name and last name concatenated with a space', function() {

        expect(talent.getFullName(fname, lname)).toBe(fname + ' ' + lname)

      })

    })

  })


})
