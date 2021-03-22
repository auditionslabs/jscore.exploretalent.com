'use strict'

let _ = require('lodash'),
  et_onlines = {}

et_onlines.create = function (array) {
  let model = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return model('et_online', item)
  })
}

module.exports = et_onlines
