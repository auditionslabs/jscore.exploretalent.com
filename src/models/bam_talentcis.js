'use strict'

let _ = require('lodash'),
  talents = {},
  Talent = require('src/models/bam_talentci.js')

talents.relationship = Talent.relationship

talents.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('bam_talentci', item)
  })
}

module.exports = talents
