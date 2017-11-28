'use strict'

let _ = require('lodash'),
  castings = {},
  Casting = require('src/models/bam_casting.js')

castings.relationship = Casting.relationship

castings.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('bam_casting', item)
  })
}

module.exports = castings
