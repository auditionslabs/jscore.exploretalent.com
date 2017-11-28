'use strict'

let _ = require('lodash'),
  campaigns = {},
  Campaign = require('src/models/campaign.js')

campaigns.relationship = Campaign.relationship

campaigns.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('campaign', item)
  })
}

module.exports = campaigns
