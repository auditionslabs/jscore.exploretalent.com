'use strict'

var _ = require('lodash'),
  talenttrackings = {}

talenttrackings.create = function(array) {
  var modelify = require('src/services/model.js')

  return _.map(array || [], function(item) {
    return modelify('bam_talenttracking', item)
  })
}

module.exports = talenttrackings
