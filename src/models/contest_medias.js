'use strict'

let _ = require('lodash'),
  contest_medias = {},
  ContestMedia = require('src/models/contest_media.js')

contest_medias.relationship = ContestMedia.relationship

contest_medias.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('contest_media', item)
  })
}

module.exports = contest_medias
