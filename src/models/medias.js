'use strict'

let _ = require('lodash'),
  medias = {},
  Media = require('src/models/media.js')

medias.relationship = Media.relationship

medias.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('media', item)
  })
}

module.exports = medias
