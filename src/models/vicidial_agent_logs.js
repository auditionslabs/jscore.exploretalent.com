'use strict'

let _ = require('lodash'),
  vicidial_agent_logss = {}

vicidial_agent_logss.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('vicidial_agent_log', item)
  })
}

module.exports = vicidial_agent_logss
