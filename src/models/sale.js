'use strict'

var _ = require('lodash')

function Sales(data) {
  _.extend(this, data || {})
}

Sales.prototype.commaSeparateNumber = function(val) {
  if (val) {
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2')
    }
    return val
  }
  else {
    return ''
  }
}

Sales.prototype.currencyWithDecimal = function(val) {
  if (val) {
    return parseFloat(val).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }
  else {
    return ''
  }
}

Sales.prototype.formatToYMDT = function(timestamp, canceled) {

  var date = new Date(timestamp*1000)

  var month = date.getUTCMonth()
  var day = date.getUTCDate()
  var year = date.getUTCFullYear()

  year = year.toString().substr(2,2)

  month = month + 1
  month = month + ""

  if (month.length == 1)
  {
      month = "0" + month
  }

  day = day + ""

  if (day.length == 1)
  {
      day = "0" + day
  }

  var formattedDate = month + "/" + day + "/" + year

  var hours = date.getHours()
    hours = hours + 8
  var minutes = date.getMinutes()
  var seconds = date.getSeconds()

  // var ampm = hours >= 12 ? 'pm' : 'am'

  hours = hours % 12
  hours = hours ? hours : 12
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds

  var formattedTime = hours + ':' + minutes + ':' + seconds

  // if canceled date, return just date with no time
  if(canceled) {
    var formatFull = formattedDate
  }
  else {
    var formatFull = formattedDate + " " + formattedTime
  }

  return formatFull
}

Sales.relationship = [
  'data:sales'
]

module.exports = Sales
