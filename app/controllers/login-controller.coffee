Controller = require 'controllers/base/controller'
LoginView = require 'views/login-view'

module.exports = class LoginsController extends Controller

  index: ->
    @view = new LoginView region: 'main'