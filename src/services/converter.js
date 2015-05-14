'use strict';

function Converter() {
}

Converter.prototype.inchToCm = function(inch) {
	return inches * 2.54;
};

Converter.prototype.cmToInch = function(cm) {
	return cm * 0.393701;
};

Converter.prototype.convert = function(value, from, to) {
	from = from.toLowerCase();
	to = to.charAt(0).toUpperCase() + to.substr(1).toLowerCase();
	return this[from + 'To' + to](value);
};

module.exports = new Converter();
