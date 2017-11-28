'use strict'

var TalentResume = require('src/models/bam_talent_resume.js')

describe('MODELS: TalentResume', function () {
  var resumeTypes

  beforeEach(function () {
    resumeTypes = TalentResume.$$resumeTypes
    TalentResume.$$resumeTypes = {
      1: 'dummy1',
      2: 'dummy2',
      3: 'dummy3'
    }
  })

  it('should extend the data object argument as instance variables', function () {
    var data = [
      {type: 1},
      {type: 2},
      {type: 3}
    ]
    expect(new TalentResume(data))
      .toEqual(jasmine.objectContaining({
        dummy1: data[0],
        dummy2: data[1],
        dummy3: data[2]
      }))
  })

  it('should return an empty object when data argument is undefined', function () {
    expect(new TalentResume()).toEqual(jasmine.objectContaining({}))
  })
})
