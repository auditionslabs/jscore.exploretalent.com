'use strict'

let _ = require('lodash'),
  date = require('src/services/date.js')

function SmsThread (data) {
  _.extend(this, data || {})
}

SmsThread.relationship = [
  'data:sms_threads'
]

module.exports = SmsThread
