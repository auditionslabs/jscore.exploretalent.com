'use strict'

let _ = require('lodash'),
  talentService = require('src/services/talent.js'),
  restService = require('src/services/rest.js'),
  scheduleResource = require('src/resources/schedule.js'),
  scheduleImportResource = require('src/resources/schedule_import.js'),
  searchTalentResource = require('src/resources/search_talent.js')

function Role (data) {
  _.extend(this, data)
}

Role.prototype.getHeightMinText = function () {
  if (parseInt(this.height_min)) { return talentService.getHeight(this.height_min) } else { return 'Any' }
}

Role.prototype.getHeightMaxText = function () {
  if (parseInt(this.height_max)) { return talentService.getHeight(this.height_max) } else { return 'Any' }
}

Role.prototype.getLikeItList = function (options, app_filter) {
  options = options || { }

  let data = {
    per_page: options.per_page,
    query: [
      [ 'with', 'user' ],
      [ 'with', 'bam_talentinfo1' ],
      [ 'with', 'bam_talentinfo2' ],
      [ 'with', 'bam_talent_media2' ],
      [ 'with', 'bam_talent_music' ],
      [ 'with', 'bam_talent_dance' ],
      [ 'join', 'laret_users', 'laret_users.bam_talentnum', '=', 'talentci.talentnum' ],
      [ 'leftJoin', 'laret_schedules', 'laret_schedules.invitee_id', '=', 'laret_users.id' ],
      [ 'where', 'laret_schedules.rating', '<>', 0 ],
      [ 'where', 'laret_schedules.bam_role_id', '=', this.role_id ]
    ]
  }

  options = options || { }

  data.page = options.page

  if (app_filter) {
    data.query.push(['whereIn', 'x_origin', app_filter])
  }

  if (options.filter == 'free') {
    data.query.push([ 'where', 'join_status', '<', 5 ])
  }

  if (options.filter == 'pro') {
    data.query.push([ 'where', 'join_status', '=', 5 ])
  }

  return self.core.resource.talent.get(data)
}

Role.prototype.getLikeItListCount = function (xorigins) {
  let deferred = $.Deferred()

  let data = {
    per_page: 1,
    query: [
      [ 'join', 'bam.laret_users', 'bam.laret_users.bam_talentnum', '=', 'search.talents.talentnum' ],
      [ 'leftJoin', 'bam.laret_schedules', 'bam.laret_schedules.invitee_id', '=', 'bam.laret_users.id' ],
      [ 'where', 'bam.laret_schedules.rating', '<>', 0 ],
      [ 'where', 'bam.laret_schedules.bam_role_id', '=', this.role_id ]
    ]
  }

  if (xorigins instanceof Array) {
    data.query.push([ 'whereIn', 'x_origin', xorigins ])
  }

  self.core.resource.search_talent.get(data)
    .then(function (res) {
      deferred.resolve(res.total)
    })

  return deferred.promise()
}

Role.prototype.getSubmissionsCount = function (xorigins) {
  let deferred = $.Deferred()

  let data = {
    per_page: 1,
    page: self.page,
    query: [
      [ 'join', 'bam.laret_users', 'bam.laret_users.bam_talentnum', '=', 'search.talents.talentnum' ],
      [ 'leftJoin', 'bam.laret_schedules', 'bam.laret_schedules.invitee_id', '=', 'bam.laret_users.id' ],
      [ 'where', 'bam.laret_schedules.submission', '=', 1 ],
      [ 'where', 'bam.laret_schedules.bam_role_id', '=', this.role_id ]
    ]
  }

  if (xorigins instanceof Array) {
    data.query.push([ 'whereIn', 'x_origin', xorigins ])
  }

  self.core.resource.search_talent.get(data)
    .then(function (res) {
      deferred.resolve(res.total)
    })

  return deferred.promise()
}

Role.prototype.getSchedulesCount = function (status) {
  let deferred = $.Deferred()

  let data = {
    per_page: 1,
    page: self.page,
    query: [
      [ 'join', 'bam.laret_users', 'bam.laret_users.bam_talentnum', '=', 'search.talents.talentnum' ],
      [ 'leftJoin', 'bam.laret_schedules', 'bam.laret_schedules.invitee_id', '=', 'bam.laret_users.id' ],
      [ 'where', 'bam.laret_schedules.status', '=', status ],
      [ 'where', 'bam.laret_schedules.bam_role_id', '=', this.role_id ]
    ]
  }

  self.core.resource.search_talent.get(data)
    .then(function (res) {
      deferred.resolve(res.total)
    })

  return deferred.promise()
}

Role.prototype.deleteLikeItList = function () {
  let data = {
    query: [
      [ 'where', 'rating', '<>', 0 ],
      [ 'where', 'bam_role_id', '=', this.role_id ]
    ],
    fields: {
      rating: 0
    },
    paginate: false
  }

  return scheduleResource.patch(data)
}

Role.prototype.copyToLikeItList = function () {
  let data = {
    query: [
      [ 'where',
        [ 'where', 'rating', '=', 0 ],
        [ 'orWhereNull', 'rating' ]
      ],
      [ 'where', 'submission', '=', 1 ],
      [ 'where', 'bam_role_id', '=', this.role_id ]
    ],
    fields: {
      rating: 3
    },
    per_page: 1000000
  }

  return scheduleResource.patch(data)
}

Role.prototype.deleteSelfSubmissions = function () {
  let data = {
    with_trashed: 1,
    query: [
      [ 'where', 'submission', '=', 1 ],
      [ 'where', 'bam_role_id', '=', this.role_id ]
    ],
    per_page: 1000000
  }

  return scheduleResource.delete(data)
}

// Role.prototype.getSelfSubmissions = function(options) {
//   let data = {
//     query : [
//       [ 'with', 'invitee.bam_talentci.bam_talentinfo1' ],
//       [ 'with', 'invitee.bam_talentci.bam_talentinfo2' ],
//       [ 'with', 'invitee.bam_talentci.bam_talent_media2' ],
//       [ 'with', 'schedule_notes.user.bam_cd_user' ],
//       [ 'where', 'submission', '=', 1 ],
//       [ 'where', 'bam_role_id', '=', this.role_id ]
//     ]
//   }

//   if (options) {
//     data = _.merge(data, options)
//   }

//   return scheduleResource.get(data)
// }

Role.prototype.getSelfSubmissions = function (options, app_filter) {
  let data = {

    query:
    [
      [ 'with', 'user' ],
      [ 'with', 'bam_talentinfo1' ],
      [ 'with', 'bam_talentinfo2' ],
      [ 'with', 'bam_talent_media2' ],
      [ 'with', 'bam_talent_music' ],
      [ 'with', 'bam_talent_dance' ],
      [ 'join', 'laret_users', 'laret_users.bam_talentnum', '=', 'talentci.talentnum' ],
      [ 'leftJoin', 'laret_schedules', 'laret_schedules.invitee_id', '=', 'laret_users.id' ],
      [ 'where', 'laret_schedules.submission', 1 ],
      [ 'where', 'laret_schedules.bam_role_id', '=', this.role_id ]
    ]
  }

  if (options) {
    data = _.merge(data, options)
  }

  if (app_filter) {
    data.query.push(['whereIn', 'x_origin', app_filter])
  }

  return self.core.resource.talent.get(data)
}

Role.prototype.copyMatchesToLikeItList = function (pro, user_id) {
  let data = {
    query: this.getMatchesFilter(pro).query,
    bam_role_id: this.role_id,
    bam_user_id: user_id,
    bam_cd_user_id: this.bam_casting.user_id
  }

  return scheduleImportResource.post(data)
}

Role.prototype.copyMatchesToLikeItListwParam = function (pro, param, user_id) {
  let data = {
    query: this.getMatchesFilter(pro, param).query,
    bam_role_id: this.role_id,
    bam_user_id: user_id,
    bam_cd_user_id: this.bam_casting.user_id
  }

  return scheduleImportResource.post(data)
}

Role.prototype.getMatches = function (pro, options, app_filter) {
  let data = this.getMatchesFilter(pro, options, app_filter)
  data.q = JSON.stringify(data.query)
  delete data.query

  return searchTalentResource.get(data)
}

Role.prototype.getMatchesFilter = function (pro, options, app_filter) {
  let data = {
    query: [
      [ 'where', 'is_pro', '=', pro ? 1 : 0 ]
    ]
  }

  if (options) {
    data = _.merge(data, options)

    if (options.has_photos) {
      if (options.has_photos == 1) {
        data.query.push(['where', 'has_photos', '=', 1 ])
      } else {
        data.query.push(['where', 'has_photos', '=', 0 ])
      }
    }

    if (options.regdate_from && options.regdate_to) {
      data.query.push(['where', 'date_entered', '<=', options.regdate_to])
      data.query.push(['where', 'date_entered', '>=', options.regdate_from])
    }
  }

  if (app_filter) {
    data.query.push([ 'whereIn', 'x_origin', app_filter ])
  }

  if (parseInt(this.age_min)) {
    data.query.push([ 'where', [
        [ 'where', 'dobyyyy', '<', new Date().getFullYear() - parseInt(this.age_min) ],
      [ 'orWhere', [
          [ 'where', 'dobyyyy', '=', new Date().getFullYear() - parseInt(this.age_min) ],
        [ 'where', [
            [ 'where', 'dobmm', '<', new Date().getMonth() + 1 ],
          [ 'orWhere', [
              [ 'where', 'dobmm', '=', new Date().getMonth() + 1 ],
              [ 'where', 'dobdd', '<=', new Date().getDate() ]
          ]]
        ]]
      ]]
    ]
    ])
  }

  if (parseInt(this.age_max)) {
    data.query.push([ 'where', 'dobyyyy', '>=', new Date().getFullYear() - parseInt(this.age_max) ])
  }

  if (parseInt(this.height_min)) {
    data.query.push([ 'where', 'heightinches', '>=', this.height_min ])
  }

  if (parseInt(this.height_max)) {
    data.query.push([ 'where', 'heightinches', '<=', this.height_max ])
  }

  let subquery = []

  // markets
  let markets = self.project.market.split('>')

  let nationwide = _.find(markets, function (market) {
    return market == 'N/A'
  })

  if (markets.length && !nationwide) {
    subquery = []

    _.each(markets, function (market) {
      if (subquery.length == 0) {
        subquery.push([ 'where', 'city', 'like', '%' + market + '%' ])
      } else {
        subquery.push([ 'orWhere', 'city', 'like', '%' + market + '%' ])
      }

      subquery.push([ 'orWhere', 'city1', 'like', '%' + market + '%' ])
      subquery.push([ 'orWhere', 'city2', 'like', '%' + market + '%' ])
      subquery.push([ 'orWhere', 'city3', 'like', '%' + market + '%' ])
    })

    data.query.push([ 'where', subquery ])
  }

  // gender
  let genders = this.getGenders()

  if (genders.length) {
    subquery = []

    _.each(genders, function (gender) {
      if (subquery.length == 0) {
        subquery.push([ 'where', 'sex', '=', gender ])
      } else {
        subquery.push([ 'orWhere', 'sex', '=', gender ])
      }
    })

    data.query.push([ 'where', subquery ])
  }

  // ethnicity
  let ethnicities = this.getEthnicities()

  if (ethnicities.length) {
    subquery = []

    _.each(ethnicities, function (ethnicity) {
      if (subquery.length == 0) {
        subquery.push([ 'where', 'ethnicity', '=', ethnicity ])
      } else {
        subquery.push([ 'orWhere', 'ethnicity', '=', ethnicity ])
      }
    })

    data.query.push([ 'where', subquery ])
  }

  // body type/build
  let builds = this.getBuilds()

  if (builds.length) {
    subquery = []

    _.each(builds, function (build) {
      if (subquery.length == 0) {
        subquery.push([ 'where', 'build', '=', build ])
      } else {
        subquery.push([ 'orWhere', 'build', '=', build ])
      }
    })

    data.query.push([ 'where', subquery ])
  }

  // hair color
  let haircolors = this.getHairColors()

  if (haircolors.length) {
    subquery = []

    _.each(haircolors, function (haircolor) {
      if (subquery.length == 0) {
        subquery.push([ 'where', 'haircolor', '=', haircolor ])
      } else {
        subquery.push([ 'orWhere', 'haircolor', '=', haircolor ])
      }
    })

    data.query.push([ 'where', subquery ])
  }

  // hair style
  let hairstyles = this.getHairStyles()

  if (hairstyles.length) {
    subquery = []

    _.each(hairstyles, function (hairstyle) {
      if (subquery.length == 0) {
        subquery.push([ 'where', 'hairstyle', '=', hairstyle ])
      } else {
        subquery.push([ 'orWhere', 'hairstyle', '=', hairstyle ])
      }
    })

    data.query.push([ 'where', subquery ])
  }

  // eye color
  let eyecolors = this.getEyeColors()

  if (eyecolors.length) {
    subquery = []

    _.each(eyecolors, function (eyecolor) {
      if (subquery.length == 0) {
        subquery.push([ 'where', 'eyecolor', '=', eyecolor ])
      } else {
        subquery.push([ 'orWhere', 'eyecolor', '=', eyecolor ])
      }
    })

    data.query.push([ 'where', subquery ])
  }

  return data
}

Role.prototype.getGenders = function () {
  let array = []

  if (this.gender_male == 1) {
    array.push('Male')
  }

  if (this.gender_female == 1) {
    array.push('Female')
  }

  if (array.length > 1) {
    return []
  }

  return array
}

Role.prototype.getEthnicities = function () {
  let array = []

  let ethnicities = {
    african: 'African',
    african_am: 'African American',
    asian: 'Asian',
    carribian: 'Caribbean',
    caucasian: 'Caucasian',
    hispanic: 'Hispanic',
    mediterranean: 'Mediterranean',
    middle_est: 'Middle Eastern',
    mixed: 'Mixed',
    native_am: 'American',
    american_in: 'American Indian',
    east_indian: 'East Indian'
  }

  if (this.ethnicity_any == 1) {
    return []
  }

  for (let e in ethnicities) {
    if (this['ethnicity_' + e] == 1) {
      array.push(ethnicities[e])
    }
  }

  return array
}

Role.prototype.getHairColors = function () {
  let array = []

  let haircolors = {
    auburn: 'Auburn',
    black: 'Black',
    blonde: 'Blonde',
    brown: 'Brown',
    chestnut: 'Chestnut',
    dark_brown: 'Dark Brown',
    grey: 'Grey',
    red: 'Red',
    white: 'White',
    salt_pepper: 'Salt&Peppe'
  }

  if (this.hair_any == 1) {
    return []
  }

  for (let color in haircolors) {
    if (this['hair_' + color] == 1) {
      array.push(haircolors[color])
    }
  }

  return array
}

Role.prototype.getHairStyles = function () {
  let array = []

  let hairstyles = {
    afro: 'Afro',
    bald: 'Bald',
    buzz: '',
    cons: 'Conservati',
    dread: 'Dreadlocks',
    long: 'Long',
    medium: 'Medium',
    shaved: 'Shaved',
    short: 'Short'
  }

  if (this.hairstyle_any == 1) {
    return []
  }

  for (let style in hairstyles) {
    if (this['hairstyle_' + style] == 1) {
      array.push(hairstyles[style])
    }
  }

  return array
}

Role.prototype.getEyeColors = function () {
  let array = []

  let eyecolors = {
    blue: 'Blue',
    b_g: 'Blue-Green',
    brown: 'Brown',
    green: 'Green',
    grey: 'Grey',
    g_b: 'Grey-Blue',
    g_g: 'Grey-Green',
    hazel: 'Hazel'
  }

  if (this.eye_any == 1) {
    return []
  }

  for (let color in eyecolors) {
    if (this['eye_' + color] == 1) {
      array.push(eyecolors[color])
    }
  }

  return array
}

Role.prototype.getBuilds = function () {
  let array = []

  let builds = {
    medium: 'Medium',
    athletic: 'Athletic',
    bb: 'Muscular',
    xlarge: 'Extra Large',
    large: 'Large',
    petite: 'Petite',
    thin: 'Slim',
    lm: 'Lean Muscle',
    average: 'Average'
  }

  if (this.built_any == 1) {
    return []
  }

  for (let b in builds) {
    if (this['built_' + b] == 1) {
      array.push(builds[b])
    }
  }

  return array
}

Role.prototype.bulkAddToLikeitlist = function (filters) {
  let data = {
    bam_cd_user_id: this.bam_casting.user_id,
    bam_role_id: this.role_id,
    query: JSON.stringify(filters),
    status: status
  }

  return scheduleImportResource.post(data)
}

Role.prototype.stopBulkAddToLikeitlist = function () {
  let data = {
    query: [
      ['where', 'bam_role_id', '=', this.role_id]
    ]
  }

  return scheduleImportResource.get(data)
    .then(function (result) {
      let promises = result.data.map(function (schedule_import) {
        return scheduleImportResource.delete({scheduleId: schedule_import.id})
      })

      return $.when.apply($.when, promises)
    })
}

function getValues (obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key]
  })
}

Role.relationship = [
  'data:bam_roles',
  'schedules',
  'bam_casting'
]

module.exports = Role
