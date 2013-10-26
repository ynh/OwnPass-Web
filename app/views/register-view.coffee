View = require 'views/base/view'
User = require 'models/user'
module.exports = class RegisterView extends View
  autoRender: true
  className: 'home-page'
  template: require './templates/register'

  initialize: (options) ->
    super
    @delegate 'click', '.register', @login

  login: (e)->
    e.preventDefault()
    if @$el.find('.password').val()!=@$el.find('.repassword').val()
        alert "Password do not match"
        return
    $(e.target).button "loading"
    userdata = {email:@$el.find('.email').val(),password:@$el.find('.password').val()}
    user = new User userdata
    self = @
    user.save()
      .done (response) =>
        window.user= userdata
        Chaplin.helpers.redirectTo 'password#index', {}
      .error (response) =>
        alert "Error"
      .always (response) =>
        $(e.target).button "reset"
