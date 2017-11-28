'use strict'

let _ = require('lodash')

function FeaturedCasting (data) {
  _.extend(this, data || {})
}

FeaturedCasting.relationship = [
  'data:featured_castings'
]

module.exports = FeaturedCasting
