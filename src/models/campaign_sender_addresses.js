'use strict'

let _ = require('lodash'),
  campaign_sender_addresses = {},
  CampaignSenderAddress = require('src/models/campaign_sender_address.js')

campaign_sender_addresses.relationship = CampaignSenderAddress.relationship

campaign_sender_addresses.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('campaign_sender_address', item)
  })
}

module.exports = campaign_sender_addresses
