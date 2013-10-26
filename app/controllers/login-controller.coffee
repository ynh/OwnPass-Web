Controller = require 'controllers/base/controller'
LoginView = require 'views/login-view'
RegisterView = require 'views/register-view'

module.exports = class LoginsController extends Controller

  index: ->
    @view = new LoginView region: 'main'

  register: ->
    @view = new RegisterView region: 'main'