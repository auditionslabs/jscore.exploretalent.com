'use strict'

let _ = require('lodash')

function Campaign (data) {
  _.extend(this, data || {})
}

Campaign.prototype.queryObject = function (key, operator) {
  let query = JSON.parse(this.query)

  let obj = {}

  _.each(query, function (q) {
    // check what type of query
    if (q[0] == 'where') {
      // its a subquery!
      if (q[1] instanceof Array) {
        _.each(q[1], function (subq) {
          let name = subq[1].split('.')
          name = name[name.length - 1]

          let value = subq[3]

          if (subq[2] == '>=') {
            value = { gt: subq[3] }
          } else if (subq[2] == '<=') {
            value = { lt: subq[3] }
          }

          // if already assigned, convert to array
          if (obj[name]) {
            if (value instanceof Object) {
              if (value.gt != null) {
                obj[name]['gt'] = value.gt
              } else {
                obj[name]['lt'] = value.lt
              }
            } else {
              let arr = []
              arr.push(obj[name])
              arr.push(value)
              obj[name] = arr
            }
          }
          // if not, assign directly
          else {
            obj[name] = value
          }
        })
      } else {
        // get only last name
        let name = q[1].split('.')
        name = name[name.length - 1]

        let value = q[3]

        if (q[2] == '>=') {
          value = { gt: q[3] }
        } else if (q[2] == '<=') {
          value = { lt: q[3] }
        }

        // if already assigned, convert to array
        if (obj[name]) {
          if (value instanceof Object) {
            if (value.gt != null) {
              obj[name]['gt'] = value.gt
            } else {
              obj[name]['lt'] = value.lt
            }
          } else {
            let arr = []
            arr.push(obj[name])
            arr.push(value)
            obj[name] = arr
          }
        }
        // if not, assign directly
        else {
          obj[name] = value
        }
      }
    }
  })

  return obj
}

Campaign.relationship = [
  'data:campaigns',
  'bam_role',
  'bam_cd_user'
]

module.exports = Campaign
