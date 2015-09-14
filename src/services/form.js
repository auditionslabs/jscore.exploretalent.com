'use strict';

module.exports = {
	serializeObject : serializeObject
};

function serializeObject(form) {
	var str = $(form).serialize();
	str = decodeURIComponent(str);
	str = str.replace(/\+/g, ' ');
	return (str).replace(/(^\?)/,'').split('&').map(
		function(n)	{
			n = n.split('=');

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
