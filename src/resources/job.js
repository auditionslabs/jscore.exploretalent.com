'use strict';

var project = require('./project.js');

module.exports = project.child('/jobs/:jobId', { model : 'bam_role' });
