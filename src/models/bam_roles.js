'use strict'

let _ = require('lodash'),
  roles = {},
  Role = require('src/models/bam_role.js')

roles.relationship = Role.relationship

roles.create = function (array) {
  let modelify = require('src/services/model.js')
  return _.map(array || [], function (item) {
    return modelify('bam_role', item)
  })
}

module.exports = roles
