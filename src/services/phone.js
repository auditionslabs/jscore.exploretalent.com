'use strict';

function unmask(phone) {
	return phon.replace(/\-/g, '').replace(/\(/g, '').replace(/\)/g, '');
}

module.exports = {
	unmask : unmask
};
