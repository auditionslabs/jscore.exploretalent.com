'use strict'

let _ = require('lodash')

function Conversation (data) {
  _.extend(this, data || {})
}

Conversation.prototype.from = function () {
  return _.first(_.where(this.users, { id: this.user_id }))
}

Conversation.prototype.to = function () {
  let user_id = this.user_id
  return _.first(_.filter(this.users, function (n) { return n.id != user_id }))
}

Conversation.prototype.getOtherUser = function () {
  if (this.owner) {
    let owner = this.owner
    return _.first(_.filter(this.users, function (n) { return n.id != owner.id }))
  }
}

Conversation.prototype.getUnreadCount = function () {
  if (this.messages) {
    return _.where(this.messages, { read: 0 }).length
  }
}

Conversation.relationship = [
  'user',
  'users',
  'messages',
  'schedule',
  'data:conversations'
]

module.exports = Conversation
