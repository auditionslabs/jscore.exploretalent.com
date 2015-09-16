'use strict';

module.exports = {
	serializeObject : serializeObject,
	validate		: validate
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

function validate(form) {
	var $form = $(form);
	var allOk = true;

	_.forEach($form.find('[data-validate]'), function(e) {
		var $e = $(e);
		var ok = true;

		switch($e.attr('data-validate')) {
			case 'phone':
			case 'number':
				ok = /^\d+$/.test($e.val());
				break;
			case 'text':
				ok = /^[A-Za-z\s]+$/.test($e.val());
				break;
			case 'email':
				ok = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/.test($e.val());
				break;
			case 'required':
				ok = $e.val() ? true : false;
				break;
			case 'zip':
				ok = /^\d+$/.test($e.val());
				if (ok)
					ok = parseInt($e.val()) <= 99999;
			default:
				break;
		}

		var $parent = $e.parent();
		var $help = $parent.find('.help-block');

		if (ok) {
			$parent.removeClass('has-error');
			$help.remove();
		}
		else {
			allOk = false;
			$parent.addClass('has-error');

			if ($help.length) {
				$help.show();
			}
			else {
				$parent.append('<p class="help-block">' + $e.attr('data-validate-error') + '</p>');
			}
		}
	});

	return allOk;
}
