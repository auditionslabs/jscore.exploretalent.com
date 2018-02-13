'use strict'

let _ = require('lodash')

function CampaignSenderAddress (data) {
  _.extend(this, data || {})
}

CampaignSenderAddress.relationship = [
  'data:campaign_sender_addresses'
]

module.exports = CampaignSenderAddress
