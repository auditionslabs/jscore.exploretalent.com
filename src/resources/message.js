'use strict';

var conversation = require('src/services/conversation.js');

module.exports = conversation.child('/messages/:messageId');
