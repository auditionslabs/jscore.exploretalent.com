var _ = require('lodash'),
	schedule_notes = {},
	ScheduleNote = require('src/models/schedule_note.js');

schedule_notes.relationship = ScheduleNote.relationship;

schedule_notes.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('schedule_note', item);
	});
};

module.exports = schedule_notes;
