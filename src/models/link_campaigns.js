'use strict'

let _ = require('lodash'),
  link_campaigns = {}

link_campaigns.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('link_campaign', item)
  })
}

module.exports = link_campaigns
