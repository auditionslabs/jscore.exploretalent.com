'use strict'

var _ = require('lodash')

function CampaignSenderType(data) {
  _.extend(this, data || {})
}

CampaignSenderType.relationship = [
  'data:campaign_sender_types'
]

module.exports = CampaignSenderType
