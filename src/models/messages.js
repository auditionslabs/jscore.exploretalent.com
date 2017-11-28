let _ = require('lodash'),
  messages = {},
  Message = require('src/models/message.js')

messages.relationship = Message.relationship

messages.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('message', item)
  })
}

module.exports = messages
