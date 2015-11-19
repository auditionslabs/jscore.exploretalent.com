'use strict';

var _ = require('lodash');

function SoundBoard(data) {
	_.extend(this, data);
}

SoundBoard.relationship = [
	'user',
	'data:sound_boards'
]

module.exports = SoundBoard;