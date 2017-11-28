'use strict'

var _ = require('lodash')

function DummyModel1(data) {
  _.extend(this, data)
}

DummyModel1.relationship = [
  'dummy_model2'
]

module.exports = DummyModel1
