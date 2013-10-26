Application = require 'application'
routes = require 'routes'
window.api= "https://ownpass.marcg.ch/"
# Initialize the application on DOM ready event.
$ ->
  $.ajaxSetup 
    beforeSend: (xhr) ->
      if window.user?
        xhr.setRequestHeader("Authorization", "Basic " + btoa(window.user.email + ":" + window.user.password))
    statusCode:
        401: ()->
            Chaplin.helpers.redirectTo 'login#index', {}
        401: ()->
            Chaplin.helpers.redirectTo 'login#index', {}
    
  new Application {
    title: 'Brunch example application',
    controllerSuffix: '-controller',
    routes
  }
