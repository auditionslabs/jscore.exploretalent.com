'use strict'

var TalentInfo2 = require('src/models/bam_talentinfo2.js')

describe('MODELS: TalentInfo2', function() {

  it('should extend the data object argument as instance variables', function() {
    var data = { dummy: 'value'  }
    expect(new TalentInfo2(data)).toEqual(jasmine.objectContaining(data))
  })

})
