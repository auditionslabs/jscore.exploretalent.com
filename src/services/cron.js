'use strict'

let Cron = {
  default: '* * * * *',
  parse: (cron) => {
    // Default data is RUN ALL THE TIME
    let data = {}

    if (typeof cron !== 'string') {
      // Reset the CRON
      cron = Cron.default
    }

    // Split the CRON
    cron = cron.split(' ')

    if (cron.length !== 5) {
      // Reset the CRON
      cron = Cron.default.split(' ')
    }

    // Check if we have hours
    cron[1] = cron[1].split('-')
    if (cron[1] == '*') {
      cron[1][0] = '0'
      cron[1][1] = '23'
    }
    if (cron[1].length == 1) {
      cron[1][1] = cron[1][0]
    }
    data.cron_hours_from = cron[1][0]
    data.cron_hours_to = cron[1][1]

    // Check if we have dates
    cron[2] = cron[2].split('-')
    if (cron[2] == '*') {
      cron[2][0] = '1'
      cron[2][1] = '31'
    }
    if (cron[2].length == 1) {
      cron[2][1] = cron[2][0]
    }
    data.cron_days_from = cron[2][0]
    data.cron_days_to = cron[2][1]

    // Check if we have months of the year
    cron[3] = cron[3].split(',')
    if (cron[3][0] === '*') {
      cron[3] = [1,2,3,4,5,6,7,8,9,10,11,12]
    }
    data.cron_months = cron[3]

    // Check if we have days of the week
    cron[4] = cron[4].split(',')
    if (cron[4][0] === '*') {
      cron[4] = [0,1,2,3,4,5,6]
    }
    data.cron_days = cron[4]

    return data
  },
  create: (data) => {
    // Default cron is RUN ALL THE TIME
    let cron = Cron.default.split(' ')

    // Check if we have hours
    if (data.cron_hours_from != 0 || data.cron_hours_to != 23) {
      cron[1] = data.cron_hours_from
      if (data.cron_hours_from != data.cron_hours_to) {
        cron[1] = data.cron_hours_from + '-' + data.cron_hours_to
      }
    }

    // Check if we have dates
    if (data.cron_days_from != 1 || data.cron_days_to != 31) {
      cron[2] = data.cron_days_from
      if (data.cron_days_from != data.cron_days_to) {
        cron[2] = data.cron_days_from + '-' + data.cron_days_to
      }
    }

    // Check if we have months of the year
    if (data.cron_months && data.cron_months.length != 12) {
      if (data.cron_months.length == 1) {
        data.cron_months = [data.cron_months]
      }
      cron[3] = data.cron_months.join(',')
    }

    // Check if we have days of the week
    if (data.cron_days && data.cron_days.length != 7) {
      if (data.cron_days.length == 1) {
        data.cron_days = [data.cron_days]
      }
      cron[4] = data.cron_days.join(',')
    }

    return cron.join(' ')
  }
}

module.exports = Cron
