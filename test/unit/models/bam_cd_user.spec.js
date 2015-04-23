'use strict';

var CdUser = require('src/models/bam_cd_user.js');

describe('MODELS: CdUser', function() {

	var cdUser,
		data;

	beforeEach(function() {
		data = {
			fname: 'Mark',
			lname: 'Johnson'
		};
		cdUser = new CdUser(data);
	});

	it('should extend the data object argument as instance variables', function() {
		expect(cdUser).toEqual(jasmine.objectContaining(data));
	});

	it('should create an empty object when data argument is undefined', function() {
		expect(cdUser).toEqual(jasmine.objectContaining({}));
	});


	describe('getFullName()', function() {

		it('should return the talent\'s full name', function() {
			expect(cdUser.getFullName()).toBe('Mark Johnson');
		});

	});

});
