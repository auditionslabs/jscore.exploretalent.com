'use strict';

var _ = require('lodash'),
	soundboards = {},
	SoundBoard = require('src/models/sound_board.js');

soundboards.relationship = SoundBoard.relationship;

soundboard.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('sound_board', item);
	});
};

module.exports = soundboards;