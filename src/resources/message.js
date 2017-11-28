'use strict'

var conversation = require('src/resources/conversation.js')

module.exports = conversation.child('/messages/:messageId')
