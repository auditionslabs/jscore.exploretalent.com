'use strict'

let api = require('src/config/api.js'),
  Resource = require('src/services/resource.js')

module.exports = new Resource(api.base + api.type + '/et/vicidial_recs/:vd_id', {
  model: 'vicidial_recs'
})
