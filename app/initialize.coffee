Application = require 'application'
routes = require 'routes'

# Initialize the application on DOM ready event.
$ ->
  $.ajaxSetup beforeSend: (xhr) ->
  	if window.user?
    	xhr.setRequestHeader("Authorization", "Basic " + btoa(window.user.email + ":" + window.user.password))
  new Application {
    title: 'Brunch example application',
    controllerSuffix: '-controller',
    routes
  }
