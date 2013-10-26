Controller = require 'controllers/base/controller'
LoginView = require 'views/login-view'
RegisterView = require 'views/register-view'
AuthorizeView = require 'views/authorize-view'

module.exports = class LoginsController extends Controller

  index: ->
    @view = new LoginView region: 'main'

  register: ->
    @view = new RegisterView region: 'main'

  authorize: (opts)->
    @view = new AuthorizeView devid:opts.devid,devhash:opts.devhash,region: 'main'