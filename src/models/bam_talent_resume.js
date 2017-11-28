'use strict'

let _ = require('lodash')

TalentResume.$$resumeTypes = require('src/values/resume_types')

function TalentResume (data) {
  let resumeTypes = TalentResume.$$resumeTypes

  let object = _.reduce(data, function (object, value, key) {
    object[resumeTypes[value.type]] = value
    return object
  }, {})

  _.each(resumeTypes, function (value, key) {
    object[value] = object[value] || {}
  })

  _.extend(this, object)
}

module.exports = TalentResume
