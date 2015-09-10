module.exports = function(element, data) {
	var self = $(element);

	//remove elements of parent element which are not templates
	_.forEach(self.find('[data-bind-template]'), function(e) {
		_.forEach($($(e).attr('data-bind-template')).children(), function(el) {
			if (!$(el).attr('data-bind-template')) {
				$(el).remove();
			}
		});
	});

	_.each(self.find('[data-bind]:not([data-bind-template])').addBack('[data-bind]'), function(element) {
		var element = $(element);

		// if child of a template, skip it since it will be databind later
		if (element.parents('[data-bind-template]').length)
			return;

		// create value from data-bind attribute
		var template	= _.template(element.attr('data-bind')),
			value 		= template(data);

		// set element value
		setValue(element, value);
	});

	_.each(self.find('[data-bind-template]'), function(element) {
		var element = $(element);

		//get only templates not within a template
		if (element.parents('[data-bind-template]').length)
			return;

		// get new data from data-bind-value
		var new_data = eval('data.' + element.attr('data-bind-value'));

		// iterate throught the data
		_.each(new_data, function(data) {
			// create clone of the template
			var clone = element.clone();
			// assign data-bind-template attr to another var before removing
			var appendTo = clone.attr('data-bind-template');
			// remove hide class
			clone.removeClass('hide');
			// clone.find('.hide').removeClass('hide');
			// remove data-bind-template so we can use it on databind
			clone.removeAttr('data-bind-template');
			clone.removeAttr('data-bind-value');
			// call databind on the cloned element
			clone.databind(data);
			// add cloned element to the target
			self.find(appendTo).addBack(appendTo).append(clone);
		});
	});

	// sets the value of the element
	function setValue(element, value) {
		var attr = element.attr('data-bind-target');

		// if data-bind-target is not set, set default value depending on what type of element it is
		if (!attr) {
			if ($(element).is('[data-slider]')) {
				attr = 'slider';
			}
			else if ($(element).is('input[type="checkbox"]') || $(element).is('input[type="radio"]')) {
				if (value == 1) {
					attr = 'checked';
					value = true;
				}
			}
			else if ($(element).is('input') || $(element).is('select')) {
				attr = 'val';
			}
			else if ($(element).is('a')) {
				attr = 'href';
			}
			else if ($(element).is('p') || $(element).is('span') || $(element).is('b') || $(element).is('td') || $(element).is('h2') ||  $(element).is('h4') || $(element).is('textarea') || $(element).is('div')) {
				attr = 'text';
			}
			else if ($(element).is('img') || $(element).is('iframe')) {
				attr = 'src';
			}
		}

		// set value depending on the attr
		switch(attr) {
			case 'val':
				$(element).val(value);
				break;
			case 'text':
				$(element).text(value);
				break;
			case 'html':
				value = value.replace(/\r\n/g, '<br />');
				$(element).html(value);
				break;
			case 'checked':
				$(element).prop('checked', value);
				break;
			case 'slider':
				value = eval(value);
				$(element).slider({ values : value });
				break;
			case 'visibility':
				if (parseInt(value))
					$(element).show();
				else
					$(element).hide();
				break;
			default:
				$(element).attr(attr, value);
				break;
		}
	}
};
