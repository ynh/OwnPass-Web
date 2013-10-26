View = require 'views/base/view'

module.exports = class AuthorizeView extends View
  autoRender: true
  className: 'home-page'
  template: require './templates/authorize'

  initialize: (options) ->
    super
    @devid = options.devid
    @devhash = options.devhash
    @delegate 'click', '.authorize', @authorize

  authorize: (e)->
    e.preventDefault()
    $(e.target).button "loading"
    $.ajax( {
        method:'PUT',
        data: JSON.stringify({
                device:@devhash,
                active:true,
                code: @$el.find('.auth').val()
            }),
        contentType: "application/json; charset=utf-8",
        url:"https://ownpass.marcg.ch/devices/"+@devid
        }).done (response) =>
            Chaplin.helpers.redirectTo 'login#index', {}
      .always (response) =>
        $(e.target).button "reset"

