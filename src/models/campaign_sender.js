'use strict'

let _ = require('lodash')

function CampaignSender (data) {
  _.extend(this, data || {})
}

CampaignSender.relationship = [
  'data:campaign_senders'
]

module.exports = CampaignSender
