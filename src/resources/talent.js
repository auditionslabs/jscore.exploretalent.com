'use strict'

var api = require('src/config/api.js'),
  Resource = require('src/services/resource.js')

var resource = new Resource(api.base + api.type + '/talentci/:talentId', {
  model: 'bam_talentci'
})

resource.search = function(data, options) {
  var deferred = $.Deferred()
  var talents, talentnums, users

  // search talent from search/talents
  self.core.resource.search_talent.get(data)
    .then(function(res) {
      // assign to a variable
      talents = res

      // get all talentnums
      talentnums = _.map(talents.data, function(talent) {
        return talent.talentnum
      })

      // add 0 so we dont have an empty array
      talentnums.push(0)

      // get user and bam_talent_media2 objects using talentci resource
      data = {
        query : [
          [ 'whereIn', 'talentci.talentnum', talentnums ],
          [ 'with', 'bam_talent_media2' ],
          [ 'with', 'user' ]
        ]
      }

      return self.core.resource.talent.get(data)
    })
    .then(function (res) {
      // loop through talents and find talent_media2 object
      _.each(talents.data, function(talent) {
        // find talentci object
        var talentci = _.find(res.data, function(t) {
          return talent.talentnum == t.talentnum
        })

        // if we have talentci object, assign its talent_media2 and user object to the talent
        if (talentci) {
          talent.bam_talent_media2 = talentci.bam_talent_media2
          talent.user = talentci.user
        }
      })

      // get all user.id
      users = _.map(talents.data, function(talent) {
        if(talent.user) {
          return talent.user.id
        }
      })

      // add 0 so we dont have an empty array
      users.push(0)

      // get favorite talents
      data = {
        q : [
          [ 'whereIn', 'bam_talentnum', talentnums ]
        ]
      }

      return self.core.resource.favorite_talent.get(data)
    })
    .then(function(res) {
      //assign favorite talents to talent
      _.each(talents.data, function(talent) {
        // find favorite object and assign it
        talent.favorite = _.find(res.data, function(favorite) {
          return talent.talentnum == favorite.bam_talentnum
        })
      })

      // if bam_role_id is given, search if talent has schedule for it
      if (options && options.bam_role_id) {
        data = {
          q : [
            [ 'whereIn', 'invitee_id', users ],
            [ 'where', 'bam_role_id', '=', options.bam_role_id ],
            [ 'with', 'schedule_notes.user.bam_cd_user' ]
          ]
        }

        return self.core.resource.schedule.get(data)
      }
      else {
        return $.when({ data : [] })
      }
    })
    .then(function(res) {
      _.each(talents.data, function(talent) {
        talent.schedule = _.find(res.data, function(schedule) {
          return talent.user.id == schedule.invitee_id
        })

        if (!talent.schedule) {
          talent.schedule = {
            schedule_notes : []
          }
        }
      })

      data = {
        query: [
          [ 'whereIn', 'talentnum', talentnums ],
          [ 'where', 'type', '=', '6' ]
        ]
      }

      return self.core.resource.talent_videos.get(data)
    })
    .then(function(res) {
      _.each(talents.data, function(talent) {
        var video = _.find(res.data, function(v) {
          return talent.talentnum == v.talentnum
        })

        if (video) {
          talent.video_id = video.video_id
        }
        else {
          talent.video_id = ''
        }
      })

      deferred.resolve(talents)
    })

  return deferred.promise()
}

module.exports = resource
