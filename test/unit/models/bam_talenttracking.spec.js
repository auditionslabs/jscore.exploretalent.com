'use strict';

var TalentTracking = require('src/models/bam_talenttracking.js');

describe('MODELS: TalentTracking', function() {

	it('should extend the data object argument as instance variables', function() {
		var data = { dummy: 'value'  };
		expect(new TalentTracking(data)).toEqual(jasmine.objectContaining(data));
	});

});
