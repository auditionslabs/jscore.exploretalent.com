'use strict'

var _ = require('lodash')

function CampaignAppLog(data) {
  _.extend(this, data || {})
}

CampaignAppLog.relationship = [
  'data:campaign_app_logs'
]

module.exports = CampaignAppLog
