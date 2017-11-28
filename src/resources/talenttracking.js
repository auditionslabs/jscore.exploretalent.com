'use strict'

var api = require('src/config/api.js'),
	Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/talent_trackings/:trackingId', {
	model: 'bam_talenttracking'
})
