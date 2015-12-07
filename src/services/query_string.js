'use strict';

module.exports = function(str) {
	return (str || document.location.search).replace(/(^\?)/,'').split('&').map(
		function(n)	{
			if (!n) {
				// return if empty
				return this;
			}

			n = n.split('=');
			n[1] = decodeURIComponent(n[1]);
			n[1] = n[1].replace(/\+/g, ' ');

			if (this[n[0]] != null) {
				if (this[n[0]] instanceof Array) {
					this[n[0]] = this[n[0]].concat(n[1]);
				}
				else {
					this[n[0]] = [ this[n[0]], n[1] ];
				}
			}
			else {
				this[n[0]] = n[1];
			}

			return this;
		}.bind({}))[0];
}
