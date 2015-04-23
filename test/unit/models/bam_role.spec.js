'use strict';

var Role = require('src/models/bam_role.js');

describe('MODELS: Role', function() {

	var role,
		data;

	beforeEach(function() {
		data = { dummy: 'value' };
		role = new Role(data);
	});

	it('should extend the data object argument as instance variables', function() {
		expect(role).toEqual(jasmine.objectContaining(data));
	});

});
