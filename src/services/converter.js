'use strict'

function Converter () {
}

Converter.prototype.inchToCm = function (inch) {
  return inch * 2.54
}

Converter.prototype.cmToInch = function (cm) {
  return cm * 0.393701
}

Converter.prototype.lbToKg = function (lb) {
  return lb * 0.453592
}

Converter.prototype.kgToLb = function (kg) {
  return kg * 2.20462
}

Converter.prototype.convert = function (value, from, to, round) {
  from = from.toLowerCase()
  to = to.charAt(0).toUpperCase() + to.substr(1).toLowerCase()

  if (round) { return Math.round(this[from + 'To' + to](value)) } else { return this[from + 'To' + to](value) }
}

module.exports = new Converter()
