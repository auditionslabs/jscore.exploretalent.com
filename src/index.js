'use strict'

let _ = require('lodash')

function Core () {
  this.$$configs = []
  this.$$runs = []
}

Core.prototype.config = function (callback) {
  this.$$configs.push(callback)
}

Core.prototype.run = function (callback) {
  this.$$runs.push(callback)
}

Core.prototype.initialize = function () {
  let configs = require('./config/**/*.js', { hash: true })
  let values = require('./values/**/*', { hash: true })

  while (this.$$configs.length > 0) {
    this.$$configs.shift()({
      config: configs,
      value: values
    })
  }

  let services = require('./services/**/*.js', { hash: true })
  let resources = require('./resources/**/*.js', { hash: true })

  while (this.$$runs.length > 0) {
    this.$$runs.shift()({
      service: services,
      resource: resources,
      value: values,
      config: configs
    })
  }
}

module.exports = new Core()
