'use strict'

let _ = require('lodash')

function ProjectStat (data) {
  _.extend(this, data || {})
}

module.exports = ProjectStat
