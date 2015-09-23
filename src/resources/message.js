'use strict';

var conversation = require('src/models/conversation.js');

module.exports = conversation.child('/messages/:messageId');
