'use strict'

var _ = require('lodash')

function Market(data) {
  _.extend(this, data)
}

module.exports = Market
