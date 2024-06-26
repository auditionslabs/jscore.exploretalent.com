'use strict'

function databind (element, data, append) {
  let self = $(element)

  // remove elements of parent element which are not templates if append flag is not true
  if (!append) {
    _.forEach(self.find('[data-bind-template]'), function (e) {
      _.forEach($($(e).attr('data-bind-template')).children(), function (el) {
        if (!$(el).attr('data-bind-template')) {
          $(el).remove()
        }
      })
    })
  }

  _.each(self.find('[data-bind]:not([data-bind-template])').addBack('[data-bind]'), function (_element) {
    let element = $(_element)

    // if child of a template, skip it since it will be databind later
    if (element.parents('[data-bind-template]').length) { return }

    // set element value
    setValue(element, _.template(element.attr('data-bind'))(data))
  })

  _.each(self.find('[data-bind-template]'), function (_element) {
    if (typeof _element === 'undefined') { return }

    element = $(_element)

    // get only templates not within a template
    if (element.parents('[data-bind-template]').length) { return }

    // get new data from data-bind-value
    let new_data = eval('data.' + element.attr('data-bind-value'))

    // iterate throught the data
    _.each(new_data, function (data) {
      // create clone of the template
      let clone = element.clone()
      // assign data-bind-template attr to another let before removing
      let appendTo = clone.attr('data-bind-template')
      // remove hide class
      clone.removeClass('hide')
      // clone.find('.hide').removeClass('hide')
      // remove data-bind-template so we can use it on databind
      clone.removeAttr('data-bind-template')
      clone.removeAttr('data-bind-value')
      // call databind on the cloned element
      databind(clone, data)
      // remove all data-bind attributes so it wont affect on next databind call
      clone.removeAttr('data-bind')
      clone.find('[data-bind]').removeAttr('data-bind')
      // add cloned element to the target
      self.find(appendTo).addBack(appendTo).append(clone)
    })
  })

  // sets the value of the element
  function setValue (element, _value) {
    let attr = element.attr('data-bind-target')
    let value = _value || ''

    // if data-bind-target is not set, set default value depending on what type of element it is
    if (!attr) {
      if ($(element).is('[data-summernote]')) {
        attr = 'summernote'
      } else if ($(element).is('[data-slider]')) {
        attr = 'slider'
      } else if ($(element).is('input[type="checkbox"]') || $(element).is('input[type="radio"]')) {
        attr = 'checked'
        _value = false
        if (value == 1 || value == 'true') {
          _value = true
        }
        value = _value
      } else if ($(element).is('[data-multiselect]')) {
        attr = 'multiselect'
      } else if ($(element).is('[data-select]')) {
        attr = 'select'
      } else if ($(element).is('input') || $(element).is('select') || $(element).is('textarea')) {
        attr = 'val'
      } else if ($(element).is('a')) {
        attr = 'href'
      } else if (
        $(element).is('p') ||
        $(element).is('span') ||
        $(element).is('b') ||
        $(element).is('td') ||
        $(element).is('h1') ||
        $(element).is('h2') ||
        $(element).is('h3') ||
        $(element).is('h4') ||
        $(element).is('h5') ||
        $(element).is('h6') ||
        $(element).is('div') ||
        $(element).is('strong')
      ) {
        attr = 'text'
      } else if ($(element).is('img') || $(element).is('iframe')) {
        attr = 'src'
      } else if ($(element).is('option')) {
        attr = 'option'
      }
    }

    // set value depending on the attr
    switch (attr) {
      case 'val':
        if ($(element).is('select')) {
          if (typeof value === 'string') {
            let delimiter = '|'
            if (/,/.test(value)) {
              delimiter = ','
            }

            value = value.split(delimiter)
          }
        }
        $(element).val(value)
        break
      case 'text':
        $(element).text(value)
        break
      case 'title':
      case 'title-suf':
        $(element).text($(element).text() + ' - ' +  value)
        break
      case 'title-pre':
        $(element).text(value + ' - ' +  $(element).text())
        break
      case 'html':
        if ($(element).is('iframe')) {
          $(element).contents().find('html').html(value)
        } else {
          $(element).html(value)
        }
        break
      case 'checked':
        $(element).prop('checked', value)
        break
      case 'slider':
        value = eval(value)
        $(element).slider({ values: value })
        break
      case 'summernote':
        $(element).text(value)
        $(element).next().find('.note-editable').html(value)
        break
      case 'select':
        if (typeof value === 'string') {
          let delimiter = '|'
          if (/,/.test(value)) {
            delimiter = ','
          }

          value = value.split(delimiter)
        }
        $(element).val(value).select2()
        break
      case 'multiselect':
        if (typeof value === 'string') {
          let delimiter = '|'
          if (/,/.test(value)) {
            delimiter = ','
          }

          value = value.split(delimiter)
        }
        $(element).val(value).multiselect('refresh')
        break
      case 'visibility':
        if (parseInt(value)) {
          $(element).show()
        } else {
          $(element).hide()
        }
        break
      case 'option':
        value = JSON.parse(value)
        $(element).attr('value', value.key)
        $(element).text(value.value)
        if (value.selected && value.selected.length > 0) {
          $(element).attr('selected', 'selected')
        }
        break
      case 'class':
        $(element).addClass(value)
        break
      case 'title-attr':
        $(element).attr('title', value)
        break
      default:
        $(element).attr(attr, value)
        break
    }
  }
}

module.exports = databind
