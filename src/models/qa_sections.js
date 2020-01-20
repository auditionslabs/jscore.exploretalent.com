'use strict'

let _ = require('lodash'),
  qa_sections = {}

qa_sections.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('qa_section', item)
  })
}

module.exports = qa_sections
