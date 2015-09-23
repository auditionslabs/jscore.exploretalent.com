'use strict';

var project = require('src/resources/project.js');

module.exports = project.child('/jobs/:jobId', { model : 'bam_role' });
