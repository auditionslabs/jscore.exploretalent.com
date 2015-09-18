'use strict';

var schedule = require('./schedule.js');

module.exports = project.child('/schedule_notes/:noteId', { model : 'schedule_note' });
