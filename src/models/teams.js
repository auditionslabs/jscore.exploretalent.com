'use strict'

let _ = require('lodash'),
  Teams = {},
  Team = require('src/models/team.js')

Teams.relationship = Team.relationship

Teams.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('team', item)
  })
}

module.exports = Teams
