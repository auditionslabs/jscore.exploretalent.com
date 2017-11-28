'use strict'

var _ = require('lodash'),
	medias = {},
	Media = require('src/models/media.js')

medias.relationship = Media.relationship

medias.create = function(array) {
	var modelify = require('src/services/model.js')

	return _.map(array || [], function(item) {
		return modelify('media', item)
	})
}

module.exports = medias
