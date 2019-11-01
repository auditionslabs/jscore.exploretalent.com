'use strict'

let api = require('src/config/api.js'),
  Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/asterisk/recording_logs/:uniqueid', {
  model: 'recording_log'
})
