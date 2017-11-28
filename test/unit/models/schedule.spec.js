'use strict'

var Schedule = require('src/models/schedule.js')

describe('MODELS: Schedule', function () {
  it('should extend the data object argument as instance variables', function () {
    var data = { dummy: 'value' }
    expect(new Schedule(data)).toEqual(jasmine.objectContaining(data))
  })
})
