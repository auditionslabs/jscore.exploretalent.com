'use strict'

var _ = require('lodash'),
  alerts = {},
  Alert = require('src/models/alert.js')

alerts.relationship = Alert.relationship

alerts.create = function(array) {
  var modelify = require('src/services/model.js')

  return _.map(array || [], function(item) {
    return modelify('alert', item)
  })
}

module.exports = alerts
