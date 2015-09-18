'use strict';

var job = require('./job.js');

module.exports = job.child('/schedules/:scheduleId');
