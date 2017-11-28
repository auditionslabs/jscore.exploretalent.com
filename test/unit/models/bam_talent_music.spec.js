'use strict'

var TalentMusic = require('src/models/bam_talent_music.js'),
  talent = require('src/services/talent.js'),
  _ = require('lodash')

describe('MODELS: TalentMusic', function () {
  var talentMusic,
    musicTypes,
    musicGenres,
    data

  beforeEach(function () {
    musicTypes = TalentMusic.$$musicTypes
    TalentMusic.$$musicTypes = [
      null,
      'dummy1',
      'dummy2',
      'dummy3',
      'dummy4'
    ]

    musicGenres = TalentMusic.$$musicGenres
    TalentMusic.$$musicGenres = [
      'dummy1',
      'dummy2',
      'dummy3',
      'dummy4'
    ]

    data = {
      music_type: 1,
      music_type2: 2,
      music_type3: 3,
      music_type4: 4,
      genre: 'dummy1',
      genre2: 'dummy2',
      genre3: 'dummy3',
      genre4: 'dummy4',
      experience: 10
    }

    talentMusic = new TalentMusic(data)
  })

  afterEach(function () {
    TalentMusic.$$musicTypes = musicTypes
  })

  it('should extend the data object argument as instance variables', function () {
    expect(talentMusic).toEqual(jasmine.objectContaining(data))
  })

  describe('getMusicType()', function () {
    it('should return undefined when music_type index provided does not exist', function () {
      expect(talentMusic.getMusicType(5)).toBeUndefined()
    })

    it('should return the music type according to its index', function () {
      expect(talentMusic.getMusicType()).toBe('dummy1')
      expect(talentMusic.getMusicType(2)).toBe('dummy2')
      expect(talentMusic.getMusicType(3)).toBe('dummy3')
      expect(talentMusic.getMusicType(4)).toBe('dummy4')
    })
  })

  describe('getGenres()', function () {
    it('should concatenate all music type values', function () {
      expect(talentMusic.getGenres())
        .toBe('dummy1, dummy2, dummy3, dummy4')

      talentMusic.genre = null
      expect(talentMusic.getGenres())
        .toBe('dummy2, dummy3, dummy4')
    })
  })

  describe('getExperience()', function () {
    var getExperience,
      experience

    beforeEach(function () {
      experience = 'dummy experience'
      getExperience = talent.getExperience
      talent.getExperience = jasmine.createSpy().and.returnValue(experience)
    })

    afterEach(function () {
      talent.getExperience = getExperience
    })

    it('should call talent.getExperience() with the experience instance variable', function () {
      talentMusic.experience = 25
      talentMusic.getExperience()
      expect(talent.getExperience).toHaveBeenCalledWith(25)
    })

    it('should return the experience', function () {
      expect(talentMusic.getExperience()).toBe(experience)
    })
  })

  describe('getPerformance()', function () {
    var getPerformance,
      performance

    beforeEach(function () {
      performance = 'dummy performance'
      getPerformance = talent.getPerformance
      talent.getPerformance = jasmine.createSpy().and.returnValue(performance)
    })

    afterEach(function () {
      talent.getPerformance = getPerformance
    })

    it('should call talent.getPerformance() with the performance instance variable', function () {
      talentMusic.number_of_gigs = 25
      talentMusic.getPerformance()
      expect(talent.getPerformance).toHaveBeenCalledWith(25)
    })

    it('should return the performance', function () {
      expect(talentMusic.getPerformance()).toBe(performance)
    })
  })
})
