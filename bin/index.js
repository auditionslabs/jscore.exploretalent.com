#!/usr/bin/env node

var fs 	= require('fs');
var _ 	= require('lodash');

var params = {
	toTitleCase : toTitleCase
};

if (process.argv.length % 2 > 0) {
	console.log('Invalid parameters.');
	return;
}

// parse parameters
for(i=2; i<process.argv.length; i++) {
	if (i % 2 == 0) {
		var name = process.argv[i].replace('--', '');
		params[name] = '';
	}
	else {
		var name = process.argv[i - 1].replace('--', '');
		params[name] = process.argv[i];
	}
}

// create resource from sample resource file
createResource();

function createResource() {
	fs.readFile('src/resources/sample.js', function(err, data) {
		var template = _.template(data);
		var str = template(params);

		fs.writeFile('src/resources/' + params.resource + '.js', str, function() {
			console.log('resource file generated');
		});
	});
}

// create models from sample model files
createModels();

function createModels() {
	// singular model
	fs.readFile('src/models/sample.js', function(err, data) {
		var template = _.template(data);
		var str = template(params);

		fs.writeFile('src/models/' + params.model + '.js', str, function() {
			console.log('model file generated');
		});
	});

	// plural model
	fs.readFile('src/models/samples.js', function(err, data) {
		var template = _.template(data);
		var str = template(params);

		fs.writeFile('src/models/' + params.model + 's.js', str, function() {
			console.log('models file generated');
		});
	});
}

function toTitleCase(str)
{
	str = str.replace(/_/g, ' ');
	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

// resource : talent
// model : bam_talentci
// url : talents/
