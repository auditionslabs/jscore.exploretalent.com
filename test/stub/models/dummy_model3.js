
'use strict'

var _ = require('lodash')

function DummyModel3 (data) {
  _.extend(this, data)
}

DummyModel3.relationship = [
  'dummy_model_key:dummy_model4',
  'dummy_model_keys:dummy_model4_many'
]

module.exports = DummyModel3
