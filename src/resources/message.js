'use strict'

let conversation = require('src/resources/conversation.js')

module.exports = conversation.child('/messages/:messageId')
