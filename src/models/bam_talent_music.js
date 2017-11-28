'use strict'

var _ = require('lodash'),
	talent = require('src/services/talent.js')

TalentMusic.$$musicTypes = require('src/values/resume_types')

function TalentMusic(data) {
	_.extend(this, data)
}

TalentMusic.prototype.getMusicType = function(index) {
	var genre = this['music_type' + (index || '')]
	return TalentMusic.$$musicTypes[genre]
}

TalentMusic.prototype.getGenres = function() {
	var self = this
	return _(['', 2, 3, 4]).map(function(item) {
		return self['genre' + item] || ''
	}).compact().value().join(', ')
}

TalentMusic.prototype.getExperience = function() {
	return talent.getExperience(this.experience)
}

TalentMusic.prototype.getPerformance = function() {
	return talent.getPerformance(this.number_of_gigs)
}

module.exports = TalentMusic
