let _ = require('lodash'),
  poster_stats = {},
  PosterStat = require('src/models/poster_stat.js')

poster_stats.relationship = PosterStat.relationship

poster_stats.create = function (array) {
  let modelify = require('src/services/model.js')

  return _.map(array || [], function (item) {
    return modelify('poster_stat', item)
  })
}

module.exports = poster_stats
