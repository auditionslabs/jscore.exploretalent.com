'use strict'

let _ = require('lodash'),
  contest_links = {},
  ContestLink = require('src/models/contest_link.js')

contest_links.relationship = ContestLink.relationship

contest_links.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('contest_link', item)
  })
}

module.exports = contest_links
