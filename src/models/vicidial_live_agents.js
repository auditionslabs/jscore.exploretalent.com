'use strict'

let _ = require('lodash'),
  vicidial_live_agentss = {}

vicidial_live_agentss.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('vicidial_live_agent', item)
  })
}

module.exports = vicidial_live_agentss
