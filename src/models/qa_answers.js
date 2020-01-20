'use strict'

let _ = require('lodash'),
  qa_answers = {}

qa_answers.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('qa_answer', item)
  })
}

module.exports = qa_answers
