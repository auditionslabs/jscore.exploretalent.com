'use strict'

let _ = require('lodash')

function Sales (data) {
  _.extend(this, data || {})
}

Sales.prototype.commaSeparateNumber = function (val) {
  if (val) {
    while (/(\d+)(\d{3})/.test(val.toString())) {
      val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2')
    }
    return val
  } else {
    return ''
  }
}

Sales.prototype.currencyWithDecimal = function (val) {
  if (val) {
    return parseFloat(val).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  } else {
    return ''
  }
}

Sales.prototype.formatToYMDT = function (timestamp, canceled) {
  let date = new Date(timestamp * 1000)

  let month = date.getUTCMonth()
  let day = date.getUTCDate()
  let year = date.getUTCFullYear()

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

  let formattedDate = month + '/' + day + '/' + year

  let hours = date.getHours()
  hours = hours + 8
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()

  // let ampm = hours >= 12 ? 'pm' : 'am'

  hours = hours % 12
  hours = hours || 12
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds

  let formattedTime = hours + ':' + minutes + ':' + seconds

  // if canceled date, return just date with no time
  if (canceled) {
    let formatFull = formattedDate
  } else {
    let formatFull = formattedDate + ' ' + formattedTime
  }

  return formatFull
}

Sales.relationship = [
  'data:sales'
]

module.exports = Sales
