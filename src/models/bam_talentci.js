'use strict'

let _ = require('lodash'),
  talent = require('src/services/talent.js'),
  scheduleResource = require('src/resources/schedule.js'),
  campaignResource = require('src/resources/campaign.js'),
  jobResource = require('src/resources/job.js'),
  accessTokenResource = require('src/resources/oauth_access_token.js'),
  date = require('src/services/date.js')

function Talent(data) {
  _.extend(this, data || {})
} Talent.prototype.getFullName = function() {
  return talent.getFullName(this.fname, this.lname)
}

Talent.prototype.getAge = function() {
  return date.calculateAge(this.bam_talentinfo1.dobyyyy, this.bam_talentinfo1.dobmm, this.bam_talentinfo1.dobdd)
}

Talent.prototype.getXOrigin = function(){
  if(this.x_origin == 8){
    return "auditions.com"
  }
  if(this.x_origin == 7){
    return "cebumodeling.com"
  }
  if(this.x_origin == 9){
    return "talent.ph"
  }
  if(this.x_origin == 0 || this.x_origin == 1 || this.x_origin == 2 || this.x_origin == 3 || this.x_origin == 4 || this.x_origin == 5 || this.x_origin == 6){
    return "exploretalent.com"
  }
}

Talent.prototype.getHeight = function() {
  let feet = Math.floor(this.heightinches / 12)
  let inches = this.heightinches % 12
  return feet + "'" + inches + '"'
}

Talent.prototype.isPaying = function() {
  return this.bam_talentrecurring ? true : false
}

Talent.prototype.loginAsTalent = function(redirect_url) {
  let deferred = $.Deferred()

  // Default has no redirect_url
  redirect_url = redirect_url || this.talentlogin

  // The beginning of the end (SUBLIME SUCKS)
  let login_url = 'http://'

  // Add the domain
  login_url += this.getXOrigin()

  // Create the access token
  accessTokenResource.post({ user_id: this.user.id, app_id: 4 })
    .then(function(res) {
      // Add the redirect URL to the PARAMS if available
      if (redirect_url.length > 0) {
        res.redirect_url = encodeURIComponent(redirect_url)
      }

      // Add the login syntax
      login_url += '/verify?'

      // Encode the values and add to the URL
      login_url += jQuery.param(res)

      // Open the new window/tab
      window.open(login_url,'_blank')

      // Resolve the deferred promise
      deferred.resolve(login_url)
    })

  // Defer the promise
  return deferred.promise()
}

Talent.prototype.getPrimaryPhoto = function() {
  let media_path =
    _.first(
      _.pluck(
        _.uniq(([]).concat(
          _.where(this.bam_talent_media2, { type : 2 }),
          _.where(this.bam_talent_media2, { type : '2' })
        )),
        'bam_media_path_full'
      )
    )

  let gender = this.bam_talentinfo1 ? this.bam_talentinfo1.sex : 'Male'

  if (media_path) {
    return 'https://etdownload.s3.amazonaws.com/' + media_path
  }
  else {
    if(gender == "Male") {
      let imgsrc = $('.profile-pic-primary').attr('src')
      if(imgsrc == '/images/filler.jpg') {
        $('a.fancybox').addClass('show-upload-primary-photo-btn')
        $('a.fancybox').removeClass('fancybox')
      }
      return '/images/filler.jpg'
    }

    else {
      let imgsrc = $('.profile-pic-primary').attr('src')
      if(imgsrc == '/images/filler_women.jpg') {
        $('a.fancybox').addClass('show-upload-primary-photo-btn')
        $('a.fancybox').removeClass('fancybox')
      }
      return '/images/filler_women.jpg'
    }
  }
}

Talent.prototype.getPrimaryPhotoId = function() {
  let id =
    _.first(
      _.pluck(
        _.uniq(([]).concat(
          _.where(this.bam_talent_media2, { type : 2 }),
          _.where(this.bam_talent_media2, { type : '2' })
        )),
        'id'
      )
    )
   return id
}
Talent.prototype.getSocialAccount = function(type) {
  let social = _.first(_.pluck(_.where(this.bam_talent_social, { sm_type : type }), 'sm_url'))

  return social
}

Talent.prototype.getLocation = function() {
  if (this.bam_talentinfo2 && this.bam_talentinfo2.city1) {
    return this.bam_talentinfo2.city1
  }
  else if(this.city && this.state && this.state.length > 2) {
    return this.city + ', ' + this.state
  }
  else if(this.state && this.state.length > 2) {
    return this.city
  }
  else {
    return 'Not Set'
  }
}

Talent.prototype.heightText = function() {
  let feet = Math.floor(this.bam_talentinfo1.heightinches / 12.00)
  let inches = this.bam_talentinfo1.heightinches % 12
  return feet + "'" + inches + '"'
}

Talent.prototype.stateText = function() {
  let states = {
    'AL' : 'Alabama',
    'AK' : 'Alaska',
    'AZ' : 'Arizona',
    'AR' : 'Arkansas',
    'CA' : 'California',
    'CO' : 'Colorado',
    'CT' : 'Connecticut',
    'DE' : 'Delaware',
    'FL' : 'Florida',
    'GA' : 'Georgia',
    'HI' : 'Hawaii',
    'ID' : 'Idaho',
    'IL' : 'Illinois',
    'IN' : 'Indiana',
    'IA' : 'Iowa',
    'KS' : 'Kansas',
    'KY' : 'Kentucky',
    'LA' : 'Louisiana',
    'ME' : 'Maine',
    'MD' : 'Maryland',
    'MA' : 'Massachusetts',
    'MI' : 'Michigan',
    'MN' : 'Minnesota',
    'MS' : 'Mississippi',
    'MO' : 'Missouri',
    'MT' : 'Montana',
    'NE' : 'Nebraska',
    'NV' : 'Nevada',
    'NH' : 'New Hampshire',
    'NJ' : 'New Jersey',
    'NM' : 'New Mexico',
    'NY' : 'New York',
    'NC' : 'North Carolina',
    'ND' : 'North Dakota',
    'OH' : 'Ohio',
    'OK' : 'Oklahoma',
    'OR' : 'Oregon',
    'PA' : 'Pennsylvania',
    'RI' : 'Rhode Island',
    'SC' : 'South Carolina',
    'SD' : 'South Dakota',
    'TN' : 'Tennessee',
    'TX' : 'Texas',
    'UT' : 'Utah',
    'VT' : 'Vermont',
    'VA' : 'Virginia',
    'WA' : 'Washington',
    'WV' : 'West Virginia',
    'WI' : 'Wisconsin',
    'WY' : 'Wyoming'
  }

  return states[this.state]
}

Talent.prototype.getSelfSubmissions = function () {
  let deferred = $.Deferred()
  let qs = self.core.service.query_string()

  let data = {
    page: qs.self_submissions || 1,
    query : [
      [ 'join', 'laret_schedules', 'laret_schedules.bam_role_id', '=', 'roles.role_id' ],
      [ 'where', 'laret_schedules.submission', '=', 1 ],
      [ 'where', 'laret_schedules.invitee_id', '=', this.user.id ],
      [ 'select', 'laret_schedules.id as schedule_id' ],
      ['orderBy', 'laret_schedules.created_at', 'DESC']
    ]
  }

  let roles

  jobResource.get(data)
    .then(function(res) {
      roles = res
      let scheduleIds = _.map(res.data, function(schedule) {
        return schedule.schedule_id
      })

      scheduleIds.push(0)

      let data2 = {
        query : [
          [ 'whereIn', 'id', scheduleIds ],
          [ 'with', 'bam_role.bam_casting' ]
        ]
      }

      return scheduleResource.get(data2)
    })
    .then(function(res) {
      res.total = roles.total

      deferred.resolve(res)
    })

  return deferred.promise()

}

Talent.prototype.getCDInvites = function () {
  let qs = self.core.service.query_string()
  let deferred = $.Deferred()

  let data = {
    page: qs.cd_invites || 1,
    per_page : 10,
    query : [
      [ 'join', 'laret_schedules', 'laret_schedules.bam_role_id', '=', 'roles.role_id' ],
      [ 'join', 'laret_campaigns', 'laret_campaigns.bam_role_id', '=', 'roles.role_id' ],
      [ 'where', 'laret_schedules.rating', '<>', 0 ],
      [ 'where', 'laret_schedules.invitee_id', '=', this.user.id ],
      [ 'select', 'laret_campaigns.id AS campaign_id', 'laret_schedules.id AS schedule_id' ],
      [ 'orderBy', 'laret_campaigns.created_at', 'DESC' ],
      [ 'groupBy', 'laret_campaigns.bam_role_id' ]
    ]
  }


  let campaignIds,
    scheduleIds,
    invites

  jobResource.get(data)
    .then(function(res) {
      invites = res

      campaignIds = _.map(res.data, 'campaign_id')
      campaignIds.push(0)

      scheduleIds = _.map(res.data, 'schedule_id')
      scheduleIds.push(0)

      data = {
        query : [
          [ 'whereIn', 'id', campaignIds ],
          [ 'with', 'bam_role.bam_casting' ],
          [ 'orderBy', 'created_at', 'DESC' ]
        ]
      }

      return campaignResource.get(data)
    })
    .then(function(res) {
      invites.data = res.data

      data = {
        query : [
        [ 'whereIn', 'id', scheduleIds ],
        [ 'with', 'conversation.messages.user.bam_talentci' ],
        [ 'with', 'conversation.messages.user.bam_cd_user' ]
        ]
      }

      return scheduleResource.get(data)
    })
    .then(function(res) {
      for(let i = 0; i < invites.data.length; i++) {
        for(let j = 0; j < res.data.length; j++) {
          if (invites.data[i].bam_role_id == res.data[j].bam_role_id) {
            invites.data[i].schedule = res.data[j]
          }
        }
      }

      deferred.resolve(invites)
    })

  return deferred.promise()
}

Talent.relationship = [
  'user',
  'bam_talentrecurring',
  'bam_talenttracking',
  'bam_talentinfo1',
  'bam_talentinfo2',
  'bam_talentinfo3',
  'bam_talent_resume',
  'bam_talent_music',
  'bam_talent_dance',
  'bam_talent_general',
  'bam_talent_social:bam_talent_socials',
  //if using GET from api, result is in the data property, set model to array of bam_talentcis
  'data:bam_talentcis'
]

module.exports = Talent
