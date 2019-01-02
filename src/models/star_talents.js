'use strict'

let _ = require('lodash'),
  star_talents = {},
  StarTalent = require('src/models/star_talent.js')

star_talents.relationship = StarTalent.relationship

star_talents.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('star_talent', item)
  })
}

module.exports = star_talents
