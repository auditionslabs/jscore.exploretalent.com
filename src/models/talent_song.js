'use strict'

let _ = require('lodash')

function TalentSong (data) {
  _.extend(this, data || {})
}

TalentSong.relationship = [
  'data:talent_songs'
]

module.exports = TalentSong
