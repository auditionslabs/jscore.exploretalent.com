'use strict'

var _ = require('lodash'),
  TalentInfo1 = require('src/models/bam_talentinfo1.js'),
  talent = require('src/services/talent.js'),
  date = require('src/services/date.js')

describe('MODELS: TalentInfo1', function () {
  var talentInfo1,
    data

  beforeEach(function () {
    data = {
      heightinches: 125,
      weightpounds: 15,
      dobyyyy: 1989,
      dobmm: 5,
      dobdd: 15,
      sex: 'Male'
    }
    talentInfo1 = new TalentInfo1(data)
  })

  it('should extend the data object argument as instance variables', function () {
    expect(talentInfo1).toEqual(jasmine.objectContaining(data))
  })

  describe('getHeight()', function () {
    var height, formatFeetInchesFromInches

    beforeEach(function () {
      height = '10\' 5"'
      formatFeetInchesFromInches = talent.formatFeetInchesFromInches
      talent.formatFeetInchesFromInches = jasmine.createSpy().and.returnValue(height)
    })

    afterEach(function () {
      talent.formatFeetInchesFromInches = formatFeetInchesFromInches
    })

    it('should call talent.formatFeetInchesFromInches()', function () {
      talentInfo1.getHeight()
      expect(talent.formatFeetInchesFromInches).toHaveBeenCalledWith(talentInfo1.heightinches)
    })
  })

  describe('getWeight()', function () {
    it('should the weight in pounds when the value is defined', function () {
      expect(talentInfo1.getWeight()).toBe(talentInfo1.weightpounds + ' lbs.')
    })

    it('should return an empty string when weight in pounds is falsy', function () {
      talentInfo1.weightpounds = null
      expect(talentInfo1.getWeight()).toBe('')
    })
  })

  describe('getAge()', function () {
    var calculateAge,
      age

    beforeEach(function () {
      age = 25
      calculateAge = date.calculateAge
      date.calculateAge = jasmine.createSpy().and.returnValue(age)
    })

    afterEach(function () {
      date.calculateAge = calculateAge
    })

    describe('when dobyyy, dobmm, and dobdd are not defined', function () {
      var tmpTalentInfo1

      beforeEach(function () {
        tmpTalentInfo1 = _.assign({}, talentInfo1)
      })

      afterEach(function () {
        _.extend(talentInfo1, tmpTalentInfo1)
      })

      it('should return undefined when dobyyyy is undefined', function () {
        talentInfo1.dobyyyy = null
        expect(talentInfo1.getAge()).not.toBeDefined()
      })

      it('should return undefined when dobmm is undefined', function () {
        talentInfo1.dobmm = null
        expect(talentInfo1.getAge()).not.toBeDefined()
      })

      it('should return undefined when dobdd is undefined', function () {
        talentInfo1.dobdd = null
        expect(talentInfo1.getAge()).not.toBeDefined()
      })
    })

    it('should return the age when dobyyyy, dobmm, and dobdd are defined', function () {
      expect(talentInfo1.getAge()).toBe(age)
    })
  })

  describe('getProfileData()', function () {
    it('should return a list of concatenated string of data from the talentInfo1 object', function () {
      expect(talentInfo1.getProfileData('getWeight', 'sex', 'getHeight', 'getWeight'))
        .toBe(
          talentInfo1.getWeight() + ', ' +
          talentInfo1.sex + ', ' +
          talentInfo1.getHeight() + ', ' +
          talentInfo1.getWeight()
        )
    })
  })
})
