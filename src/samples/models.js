'use strict'

let _ = require('lodash'),
  <%= resource + 's' %> = {}

<%= resource + 's' %>.create = function(array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function(item) {
    return modelify('<%= model %>', item)
  })
}

module.exports = <%= resource + 's' %>
