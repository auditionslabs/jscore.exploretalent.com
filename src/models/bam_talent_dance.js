'use strict'

let _ = require('lodash'),
  talentHelper = require('src/services/talent.js')

function TalentDance (data) {
  _.extend(this, data)
}

TalentDance.prototype.getExperience = function () {
  return talentHelper.getExperience(this.experience)
}

TalentDance.prototype.getPerformance = function () {
  return talentHelper.getPerformance(this.num_of_perform)
}

module.exports = TalentDance
