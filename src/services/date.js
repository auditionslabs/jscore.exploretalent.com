'use strict'

let _ = require('lodash')

function toUnixTimeStamp (date) {
  return new Date(date) / 1000
}

function formatYMD (value) {
  let date
  if (isNaN(value)) {
    date = new Date(value)
  } else {
    date = new Date((value || 0) * 1000 - (7 * 60 * 60)) // set timezone to dev-la (GMT -7)
  }

  if (typeof date == 'undefined' || date == 'Invalid Date') {
    return 'Invalid Date'
  }

  return date.getUTCFullYear() + '-' + _.padLeft(date.getUTCMonth() + 1, 2, 0) + '-' + _.padLeft(date.getUTCDate(), 2, 0)
}

function formatFYMD (value) {
  let date
  if (isNaN(value)) {
    date = new Date(value)
  } else {
    date = new Date((value || 0) * 1000 - (7 * 60 * 60)) // set timezone to dev-la (GMT -7)
  }

  if (typeof date == 'undefined' || date == 'Invalid Date') {
    return 'Invalid Date'
  }

  return moment(date).format('MMMM DD, YYYY')
}

function formatMDY (value, seperator = '-') {
  let date
  if (isNaN(value)) {
    date = new Date(value)
  } else {
    date = new Date((value || 0) * 1000 - (7 * 60 * 60)) // set timezone to dev-la (GMT -7)
  }

  if (typeof date == 'undefined' || date == 'Invalid Date') {
    return 'Invalid Date'
  }

  return date.getUTCMonth() + 1 + seperator + _.padLeft(date.getUTCDate(), 2, 0) + seperator + _.padLeft(date.getUTCFullYear(), 2, 0)
}

function calculateAge (year, month, day) {
  let difference = Date.now() - new Date(year, month - 1, day).getTime()
  let fromEpoch = new Date(difference)
  return fromEpoch.getUTCFullYear() - 1970
}

function now () {
  let date = new Date(Date.now())
  return {
    year: date.getUTCFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  }
}

function formatDateTime (value) {
  let date
  if (isNaN(value)) {
    date = new Date(value)
  } else {
    date = new Date((value || 0) * 1000 - (7 * 60 * 60)) // set timezone to dev-la (GMT -7)
  }

  if (typeof date == 'undefined' || date == 'Invalid Date') {
    return 'Invalid Date'
  }

  return date.getUTCFullYear() + '-' +
    _.padLeft(date.getUTCMonth() + 1, 2, 0) + '-' +
    _.padLeft(date.getUTCDate(), 2, 0) + ' ' +
    _.padLeft((date.getUTCHours() > 12 ? date.getUTCHours() - 12 : (date.getUTCHours() == '00') ? '12' : date.getUTCHours()), 2, 0) + ':' +
    _.padLeft(date.getUTCMinutes(), 2, 0) + ' ' +
    (date.getUTCHours() < 12 ? 'AM' : 'PM')
}

module.exports = {
  toUnixTimeStamp: toUnixTimeStamp,
  formatYMD: formatYMD,
  formatMDY: formatMDY,
  formatDateTime: formatDateTime,
  calculateAge: calculateAge,
  now: now,
  formatFYMD: formatFYMD
}
