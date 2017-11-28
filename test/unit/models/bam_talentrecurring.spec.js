'use strict'

var TalentRecurring = require('src/models/bam_talentrecurring.js')

describe('MODELS: TalentRecurring', function() {

  it('should extend the data object argument as instance variables', function() {
    var data = { dummy: 'value'  }
    expect(new TalentRecurring(data)).toEqual(jasmine.objectContaining(data))
  })

})
