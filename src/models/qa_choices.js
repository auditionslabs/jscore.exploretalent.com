'use strict'

let _ = require('lodash'),
  qa_choices = {}

qa_choices.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('qa_choice', item)
  })
}

module.exports = qa_choices
