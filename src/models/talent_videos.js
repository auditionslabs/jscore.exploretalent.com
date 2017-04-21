'use strict';

var _ = require('lodash'),
	talent_videos = {},
    TalentVideo = require('src/models/talent_video.js');

talent_videos.create = function(array) {
	var modelify = require('src/services/model.js');

	return _.map(array || [], function(item) {
		return modelify('talent_video', item);
	});
};

module.exports = talent_videos;