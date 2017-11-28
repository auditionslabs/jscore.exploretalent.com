let _ = require('lodash'),
  casting_apps = {},
  CastingApp = require('src/models/casting_app.js')

casting_apps.relationship = CastingApp.relationship

casting_apps.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('casting_app', item)
  })
}

module.exports = casting_apps
