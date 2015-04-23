'use strict';

var Project = require('src/models/project.js');

describe('MODELS: Project', function() {

	it('should extend the data object argument as instance variables', function() {
		var data = { dummy: 'value'  };
		expect(new Project(data)).toEqual(jasmine.objectContaining(data));
	});

});
