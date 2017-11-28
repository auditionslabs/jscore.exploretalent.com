'use strict'

let _ = require('lodash'),
  cd_users = {},
  CdUser = require('src/models/bam_cd_user.js')

cd_users.relationship = CdUser.relationship

cd_users.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('bam_cd_user', item)
  })
}

module.exports = cd_users
