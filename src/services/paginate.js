'use strict';
var query_string = require('./query_string.js');

//this -> element to paginate
//per_page - default: 25
//total
//page - default: 1
//name
module.exports = function(element, options) {
	var qs = query_string();
	var $this = $(element);

	if (!options)
		options = {};

	if (!options.per_page)
		options.per_page = 25;

	options.page = parseInt(qs[options.name]);
	if (!options.page)
		options.page = 1;

	var url = window.location.href.replace(window.location.search, '');
	var page_count = Math.ceil(options.total / options.per_page);

	if (page_count > 1) {
		var ul = $('<ul>').addClass(options.class);

		qs[options.name] = 1;
		var prevv = $('<li>').append(
			$('<a>').attr('href', url + '?' + $.param(qs)).append(
				$('<span>').html('&laquo;')
			)
		);

		qs[options.name] = options.page == 1 ? 1 : options.page - 1;
		var prev = $('<li>').append(
			$('<a>').attr('href', url + '?' + $.param(qs)).append(
				$('<span>').text('Previous')
			)
		);

		if (options.page != 1) {
			ul.append(prevv);
			ul.append(prev);
		}

		var pages = [];

		var start = options.page - 5,
			end = options.page + 5;

		for(var i = start;i <= end;i++) {
			if (i > 0 && i <= page_count) {
				qs[options.name] = i;
				var li = $('<li>').addClass('display-none-zz-xs').append(
					$('<a>').attr('href', url + '?' + $.param(qs)).text(i).addClass(options.page == i ? 'active' : '')
				);
				pages.push(li);
			}
		}

		qs[options.name] = options.page == page_count ? options.page : options.page + 1;
		var next = $('<li>').append(
			$('<a>').attr('href', url + '?' + $.param(qs)).append(
				$('<span>').text('Next')
			)
		);

		qs[options.name] = page_count;
		var nextt = $('<li>').append(
			$('<a>').attr('href', url + '?' + $.param(qs)).append(
				$('<span>').html('&raquo;')
			)
		);

		ul.append(pages);

		if (page_count != options.page) {
			ul.append(next);
			ul.append(nextt);
		}

		$this.empty();
		$this.append(ul);
	}
	else {
		$this.empty();
	}
};
