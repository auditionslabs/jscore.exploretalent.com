let _ = require('lodash'),
  talents = {}

talents.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('search_talent', item)
  })
}

module.exports = talents
