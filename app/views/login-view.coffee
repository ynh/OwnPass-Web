View = require 'views/base/view'

module.exports = class LoginView extends View
  autoRender: true
  className: 'home-page'
  template: require './templates/login'

  initialize: (options) ->
    super
    @delegate 'click', '.login', @login

  login: (e)->
  	e.preventDefault()
  	$(e.target).button "loading" 
