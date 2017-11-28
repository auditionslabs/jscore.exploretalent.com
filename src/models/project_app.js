'use strict'

var _ = require('lodash')

function ProjectApp(data) {
  _.extend(this, data)
}

ProjectApp.relationship = [
  'data:project_apps'
]
module.exports = ProjectApp
