'use strict'

let api = require('src/config/api.js'),
  Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/campaign_senders/:senderId', {
  model: 'campaign_sender'
})
