'use strict'

var User = require('src/models/user.js')

describe('MODELS: User', function () {
  it('should extend the data object argument as instance variables', function () {
    var data = { dummy: 'value' }
    expect(new User(data)).toEqual(jasmine.objectContaining(data))
  })
})
