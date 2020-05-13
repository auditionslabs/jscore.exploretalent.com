'use strict'

let _ = require('lodash'),
  talent_songs = {},
  TalentSong = require('src/models/talent_song.js')

talent_songs.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('talent_song', item)
  })
}

module.exports = talent_songs
