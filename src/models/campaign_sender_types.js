'use strict'

let _ = require('lodash'),
  campaign_sender_types = {},
  CampaignSenderType = require('src/models/campaign_sender_type.js')

campaign_sender_types.relationship = CampaignSenderType.relationship

campaign_sender_types.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('campaign_sender_type', item)
  })
}

module.exports = campaign_sender_types
