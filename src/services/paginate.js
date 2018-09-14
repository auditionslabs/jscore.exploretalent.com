'use strict'
let query_string = require('./query_string.js')

//this -> element to paginate
//per_page - default: 25
//total
//page - default: 1
//name
module.exports = function(element, options) {
  let qs = query_string()
  let $this = $(element)

  if (!options)
    options = {}

  if (!options.per_page)
    options.per_page = 25

  options.page = parseInt(qs[options.name])
  if (!options.page)
    options.page = 1

  let url = window.location.href.replace(window.location.search, '')
  let page_count = options.total ? Math.ceil(options.total / options.per_page) : options.page
  let infinate = options.total ? false : true

  if (page_count > 1 || infinate) {
    let ul = $('<ul>').addClass(options.class)

    qs[options.name] = 1
    let prevv = $('<li>').append(
      $('<a>').attr('href', url + '?' + $.param(qs)).append(
        $('<span>').html('&laquo')
      )
    )

    qs[options.name] = options.page == 1 ? 1 : options.page - 1
    let prev = $('<li>').append(
      $('<a>').attr('href', url + '?' + $.param(qs)).append(
        $('<span>').text('Previous')
      )
    )

    if (options.page != 1) {
      ul.append(prevv)
      ul.append(prev)
    }

    let pages = []

    let start = options.page - 5,
      end = options.page + 5

    for(let i = start; i <= end; i++) {
      if (i > 0 && i <= page_count) {
        qs[options.name] = i
        let li = $('<li>').addClass('display-none-zz-xs').append(
          $('<a>').attr('href', url + '?' + $.param(qs)).text(i).addClass(options.page == i ? 'active' : '')
        )
        pages.push(li)
      }
    }

    qs[options.name] = options.page == page_count ? options.page : options.page + 1
    qs[options.name] = infinate ? options.page + 1 : qs[options.name]
    let next = $('<li>').append(
      $('<a>').attr('href', url + '?' + $.param(qs)).append(
        $('<span>').text('Next')
      )
    )

    qs[options.name] = page_count
    let nextt = $('<li>').append(
      $('<a>').attr('href', url + '?' + $.param(qs)).append(
        $('<span>').html('&raquo')
      )
    )

    ul.append(pages)

    if (page_count != options.page) {
      ul.append(next)
      ul.append(nextt)
    }

    if (infinate) {
      ul.append(next)
    }

    $this.empty()
    $this.append(ul)
  }
  else {
    $this.empty()
  }
}
