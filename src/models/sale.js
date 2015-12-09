'use strict';

var _ = require('lodash');

function Sales(data) {
	_.extend(this, data || {});
}

Sales.prototype.commaSeparateNumber = function(val) {

	while (/(\d+)(\d{3})/.test(val.toString())){
    	val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;

};

Sales.prototype.formatToYMDT = function(timestamp) {

	var date = new Date(timestamp*1000);

	var month = date.getMonth();
	var day = date.getDate();
	var year = date.getFullYear();

	year = year.toString().substr(2,2);

	month = month + 1;
	month = month + "";

	if (month.length == 1)
	{
	    month = "0" + month;
	}

	day = day + "";

	if (day.length == 1)
	{
	    day = "0" + day;
	}

	var formattedDate = month + "-" + day + "-" + year;

	var hours = date.getHours();
	var minutes = date.getMinutes();

	var ampm = hours >= 12 ? 'pm' : 'am';

	hours = hours % 12;
	hours = hours ? hours : 12;
	minutes = minutes < 10 ? '0' + minutes : minutes;

	var formattedTime = hours + ':' + minutes + ' ' + ampm;

	var formatFull = formattedDate + " " + formattedTime;

	return formatFull;
}

Sales.relationship = [
	'data:sales'
];

module.exports = Sales;
