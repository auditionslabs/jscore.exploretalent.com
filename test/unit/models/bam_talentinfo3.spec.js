'use strict'

var TalentInfo3 = require('src/models/bam_talentinfo3.js')

describe('MODELS: TalentInfo3', function () {
  it('should extend the data object argument as instance variables', function () {
    var data = { dummy: 'value' }
    expect(new TalentInfo3(data)).toEqual(jasmine.objectContaining(data))
  })
})
