'use strict'

var Talent = require('src/models/bam_talentci.js'),
  talent = require('src/services/talent.js')

describe('MODELS: Talent', function() {

  it('should extend the data object argument as instance variables', function() {
    var data = { dummy: 'value'  }
    expect(new Talent(data)).toEqual(jasmine.objectContaining(data))
  })

  it('should return an empty object when data argument is undefined', function() {
    expect(new Talent()).toEqual(jasmine.objectContaining({}))
  })

  describe('getFullName()', function() {

    it('should return the talent\'s full name', function() {
      expect(new Talent({fname: 'Mark', lname: 'Johnson'})
        .getFullName()).toBe('Mark Johnson')
    })

  })

})
