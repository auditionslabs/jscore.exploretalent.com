'use strict'

module.exports = {
  serializeObject: serializeObject,
  validate: validate
}

function serializeObject (form) {
  let str = $(form).serialize()
  return (str).replace(/(^\?)/, '').split('&').map(
    function (n) {
      n = n.split('=')
      n[1] = decodeURIComponent(n[1])
      n[1] = n[1].replace(/\+/g, ' ')

      if (this[n[0]] != null) {
        if (this[n[0]] instanceof Array) {
          this[n[0]] = this[n[0]].concat(n[1])
        } else {
          this[n[0]] = [ this[n[0]], n[1] ]
        }
      } else {
        this[n[0]] = n[1]
      }

      return this
    }.bind({}))[0]
}

function validate (form) {
  let $form = $(form)
  let allOk = true

  _.forEach($form.find('[data-validate]'), function (e) {
    let $e = $(e)
    let ok = true
    switch ($e.attr('data-validate')) {
      case 'phone':
      case 'number':
        ok = /^\d+$/.test($e.val())
        break
      case 'text':
        ok = /^[A-Za-z\s]+$/.test($e.val())
        break
      case 'email':
        ok = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/.test($e.val())
        break
      case 'email-not-required':
        ok = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}|^$|^\s$\b/.test($e.val())
        break
      case 'phone-not-required':
        ok = /^[0-9]+$|^$|^\s$/.test($e.val())
        break
      case 'required':
        ok = !!$e.val().trim()
        break
      case 'zip':
        ok = /^[0-9]+$|^$|^\s$/.test($e.val())
        let okNum = /^[0-9]+$/.test($e.val())
        if (ok == okNum) { ok = parseInt($e.val()) <= 99999 }
      default:
        break
    }

    let $parent = $e.parent()
    let $help = $parent.find('.help-block')

    if (ok) {
      $parent.removeClass('has-error')
      $help.remove()
    } else {
      allOk = false
      $parent.addClass('has-error')

      if ($help.length) {
        $help.show()
      } else {
        $parent.append('<p class="help-block">' + $e.attr('data-validate-error') + '</p>')
      }
    }
  })

  return allOk
}
