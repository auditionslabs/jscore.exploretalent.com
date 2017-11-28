'use strict'

let _ = require('lodash')

modelify.$$hashRelation = hashRelation

function modelify (name, data) {
  let models = require('../models/*.js', { hash: true }),
    model = models[name],
    relationship,
    relations,
    difference

  if (model && (_.isArray(data) || _.isObject(data))) {
    relationship = hashRelation(model.relationship || [])

    relations = _.pick(data, _.keys(relationship))

    _.each(relations, function (property, key) {
      data[key] = modelify(relationship[key], property)
    })

    if (model.create && _.isFunction(model.create)) {
      /* jshint newcap: false */
      data = model.create(data)
    } else {
      data = new model(data)
    }
  }

  return data
}

function hashRelation (relationships) {
  return _.reduce(relationships, function (object, relationship) {
    let keys = relationship.split(':'),
      modelName = keys.pop(),
      propertyName = keys.pop() || modelName

    object[propertyName] = modelName

    return object
  }, {})
}

module.exports = modelify
