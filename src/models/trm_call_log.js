'use strict'

let _ = require('lodash')

function TrmCallLog (data) {
  _.extend(this, data || {})
}

TrmCallLog.prototype.formatToDateTime = function (timestamp) {
  let date = new Date(timestamp * 1000)

  let month = date.getMonth()
  let day = date.getDate()
  let year = date.getFullYear()

  year = year.toString().substr(2, 2)

  month = month + 1
  month = month + ''

  if (month.length == 1) {
    month = '0' + month
  }

  day = day + ''

  if (day.length == 1) {
    day = '0' + day
  }

  let formattedDate = month + '-' + day + '-' + year

  let hours = date.getHours()
  let minutes = date.getMinutes()

  let ampm = hours >= 12 ? 'pm' : 'am'

  hours = hours % 12
  hours = hours || 12
  minutes = minutes < 10 ? '0' + minutes : minutes

  let formattedTime = hours + ':' + minutes + ' ' + ampm

  let formatFull = formattedDate + ' ' + formattedTime

  return formatFull
}

TrmCallLog.relationship = [
  'data:trm_call_logs'
]

module.exports = TrmCallLog
