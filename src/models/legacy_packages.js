'use strict'

let _ = require('lodash'),
  legacy_packagess = {}

legacy_packagess.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('legacy_package', item)
  })
}

module.exports = legacy_packagess
