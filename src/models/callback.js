'use strict'

let _ = require('lodash')

function CallBack (data) {
  _.extend(this, data)
}

CallBack.prototype.formatToDateTime = function (timestamp) {
  return moment.unix(timestamp).format('DD/MM/YY hh:mm A')
}

CallBack.relationship = [
  'data:callbacks'
]

module.exports = CallBack
