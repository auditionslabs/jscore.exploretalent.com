'use strict'

let _ = require('lodash')

function FeaturedCastingAdmin (data) {
  _.extend(this, data || {})
}

FeaturedCastingAdmin.relationship = [
  'data:featured_casting_admins'
]

module.exports = FeaturedCastingAdmin
