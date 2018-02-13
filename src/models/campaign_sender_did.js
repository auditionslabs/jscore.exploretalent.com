'use strict'

let _ = require('lodash')

function CampaignSenderDid (data) {
  _.extend(this, data || {})
}

CampaignSenderDid.relationship = [
  'data:campaign_sender_dids'
]

module.exports = CampaignSenderDid
