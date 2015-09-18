'use strict';

var schedule = require('./schedule.js');

module.exports = schedule.child('/schedule_notes/:noteId', { model : 'schedule_note' });
