'use strict'

let _ = require('lodash')

function LinkCampaign (data) {
  _.extend(this, data || {})
}

LinkCampaign.relationship = [
  'data:link_campaigns'
]

module.exports = LinkCampaign
