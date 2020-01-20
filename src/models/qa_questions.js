'use strict'

let _ = require('lodash'),
  qa_questions = {}

qa_questions.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('qa_question', item)
  })
}

module.exports = qa_questions
