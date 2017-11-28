'use strict'

var _ = require('lodash')

function VicidialLiveAgents(data) {
	_.extend(this, data || {})
}

VicidialLiveAgents.relationship = [
	'data:vicidial_live_agents'
]

module.exports = VicidialLiveAgents
