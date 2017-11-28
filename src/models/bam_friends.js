'use strict'

let _ = require('lodash'),
  friends = {},
  Friend = require('src/models/bam_friend.js')

friends.relationship = Friend.relationship

friends.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('bam_friend', item)
  })
}

module.exports = friends
