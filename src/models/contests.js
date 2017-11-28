'use strict'

let _ = require('lodash'),
  contests = {},
  Contest = require('src/models/contest.js')

contests.relationship = Contest.relationship

contests.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('contest', item)
  })
}

module.exports = contests
