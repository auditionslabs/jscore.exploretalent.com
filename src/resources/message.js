'use strict';

var conversation = require('./conversation.js');

module.exports = conversation.child('/messages/:messageId');
