'use strict';

function unmask(phone) {
	return phone.replace(/\-/g, '').replace(/\(/g, '').replace(/\)/g, '');
}

module.exports = {
	unmask : unmask
};
