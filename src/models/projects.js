/*'use strict';

var _ = require('lodash');

function Project(data) {
	_.extend(this, data);
}

module.exports = Project;
*/

'use strict';

var _ = require('lodash'),
	projects = {},
	project = require('./project.js');

projects.relationship = Project.relationship;

projects.create = function(array) {
	var modelify = require('../services/model.js');

	return _.map(array || [], function(item) {
		return modelify('project', item);
	});
};

module.exports = projects;