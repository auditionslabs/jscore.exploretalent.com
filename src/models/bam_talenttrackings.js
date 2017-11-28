'use strict'

let _ = require('lodash'),
  talenttrackings = {}

talenttrackings.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('bam_talenttracking', item)
  })
}

module.exports = talenttrackings
