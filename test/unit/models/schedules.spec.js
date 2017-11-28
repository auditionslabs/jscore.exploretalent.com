'use strict'

var Schedules = require('src/models/schedules.js'),
  Schedule = require('src/models/schedule.js'),

  _ = require('lodash')

describe('MODELS: Schedules', function () {
  it('should have the same relationship with the `schedule` module', function () {
    expect(Schedules.relationship).toBe(Schedule.relationship)
  })

  describe('create()', function () {
    it('should create an array of `schedule` objects', function () {
      var schedules = Schedules.create([{}, {}, {}])

      _.each(schedules, function (schedule) {
        expect(schedule instanceof Schedule).toBeTruthy()
      })
    })

    it('should return an empty array when argument is not defined', function () {
      expect(Schedules.create()).toEqual([])
    })
  })
})
