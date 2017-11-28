'use strict'

function unmask(phone) {
  return phone.replace(/\-/g, '').replace(/\(/g, '').replace(/\)/g, '')
}

function mask(phone) {
  if (phone.length == 10)
    return "(" + phone.substring(0, 3) + ")" + phone.substring(3,6) + "-" + phone.substring(6,10)
}

module.exports = {
  unmask : unmask,
  mask : mask
}
