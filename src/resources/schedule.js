'use strict';

var project = require('./project.js');

module.exports = project.child('/schedules/:scheduleId');
