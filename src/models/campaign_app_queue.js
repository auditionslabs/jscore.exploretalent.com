'use strict'

let _ = require('lodash')

function CampaignAppQueue (data) {
  _.extend(this, data || {})
}

CampaignAppQueue.relationship = [
  'data:campaign_app_queues',
  'bam_talentci'
]

module.exports = CampaignAppQueue
