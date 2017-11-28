'use strict'

var _ = require('lodash')

function KnowledgeBase(data) {
  _.extend(this, data)
}

module.exports = KnowledgeBase