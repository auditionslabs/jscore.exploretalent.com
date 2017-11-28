'use strict'

let _ = require('lodash')

function TransactionsStore (data) {
  _.extend(this, data || {})
}

TransactionsStore.relationship = [
  'data:transactions_stores'
]

module.exports = TransactionsStore
