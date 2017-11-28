'use strict'

let _ = require('lodash'),
  conversations = {},
  Conversation = require('src/models/conversation.js')

conversations.relationship = Conversation.relationship

conversations.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('conversation', item)
  })
}

module.exports = conversations
