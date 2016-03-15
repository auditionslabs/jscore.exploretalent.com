'use strict';

var _ = require('lodash');

function VicidialReports(data) {
	_.extend(this, data || {});
}

VicidialReports.relationship = [
	'data:vicidial_reports'
];

module.exports = VicidialReports;
