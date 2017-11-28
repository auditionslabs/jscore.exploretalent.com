'use strict'

let crossroads = require('crossroads'),
  _ = require('lodash')

function Router () {
  let self = this
  self.$$controllers = {}
  self.$$params = []
}

Router.prototype.add = function (url, controller) {
  let self = this

  controller = self.$$controllers[controller]

  if (_.isFunction(controller)) {
    crossroads.addRoute(url, function () {
      controller.apply(null, self.$$params.concat(_.toArray(arguments)))
    })
  }

  return self
}

Router.prototype.finalize = function () {
  crossroads.parse(window.location.pathname)
}

module.exports = new Router()
