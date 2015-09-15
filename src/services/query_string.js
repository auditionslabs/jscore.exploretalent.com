'use strict';

function toOjbect(str) {
	return (str || document.location.search).replace(/(^\?)/,'').split("&").map( function(n) { if (n) return n = n.split("="),this[n[0]] = n[1],this; }.bind({}))[0] || {};
}

module.exports = { toObject : toObject };
