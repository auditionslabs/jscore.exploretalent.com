'use strict'

let _ = require('lodash')

function TalentVideo (data) {
  _.extend(this, data || {})
}

TalentVideo.relationship = [
  'data:talent_videos'
]

module.exports = TalentVideo
