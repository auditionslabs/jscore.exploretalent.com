'use strict';

var _ = require('lodash'),
	schedules = {},
	Schedule = require('src/models/sound_board.js');

soundboard.relationship = SoundBoard.relationship;

soundboard.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('sound_board', item);
	});
};

module.exports = soundboard;