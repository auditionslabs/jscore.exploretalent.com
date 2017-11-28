'use strict'

var TalentDance = require('src/models/bam_talent_dance.js'),
  talent = require('src/services/talent.js'),
  _  = require('lodash')

describe('MODELS: TalentDance', function() {

  var talentDance,
    data

  beforeEach(function() {

    data = {
      genre: 'dummy1',
      genre2: 'dummy2',
      genre3: 'dummy3',
      genre4: 'dummy4',
      experience: 10
    }

    talentDance = new TalentDance(data)
  })

  it('should extend the data object argument as instance variables', function() {
    expect(talentDance).toEqual(jasmine.objectContaining(data))
  })

  describe('getExperience()', function() {

    var getExperience,
      experience

    beforeEach(function() {
      experience = 'dummy experience'
      getExperience = talent.getExperience
      talent.getExperience = jasmine.createSpy().and.returnValue(experience)
    })

    afterEach(function() {
      talent.getExperience = getExperience
    })

    it('should call talent.getExperience() with the experience instance variable', function() {
      talentDance.experience = 25
      talentDance.getExperience()
      expect(talent.getExperience).toHaveBeenCalledWith(25)
    })

    it('should return the experience', function() {
      expect(talentDance.getExperience()).toBe(experience)
    })

  })

  describe('getPerformance()', function() {

    var getPerformance,
      performance

    beforeEach(function() {
      performance = 'dummy performance'
      getPerformance = talent.getPerformance
      talent.getPerformance = jasmine.createSpy().and.returnValue(performance)
    })

    afterEach(function() {
      talent.getPerformance = getPerformance
    })

    it('should call talent.getPerformance() with the performance instance variable', function() {
      talentDance.num_of_perform = 25
      talentDance.getPerformance()
      expect(talent.getPerformance).toHaveBeenCalledWith(25)
    })

    it('should return the performance', function() {
      expect(talentDance.getPerformance()).toBe(performance)
    })


  })

})
