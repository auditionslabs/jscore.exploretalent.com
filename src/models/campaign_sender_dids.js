'use strict'

let _ = require('lodash'),
  campaign_sender_dids = {},
  CampaignSenderDid = require('src/models/campaign_sender_did.js')

campaign_sender_dids.relationship = CampaignSenderDid.relationship

campaign_sender_dids.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('campaign_sender_did', item)
  })
}

module.exports = campaign_sender_dids
