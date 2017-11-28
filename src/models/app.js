'use strict'

var _ = require('lodash')

function App(data) {
	_.extend(this, data || {})
}

App.relationship = [
	'data:apps'
]

module.exports = App
