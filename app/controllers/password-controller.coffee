AppController = require 'controllers/base/appcontroller'
PasswordsView = require 'views/passwords-view'
PasswordView = require 'views/password-view'
Collection = require 'models/base/collection'
Password = require 'models/password'

module.exports = class PasswordsController extends AppController

  index: ->
    @passwords = new Collection null, model: Password  
    @passwords.url = "#{window.api}passwords"
    @view = new PasswordsView collection: @passwords, region: 'main'
    @view.render()
    @passwords.fetch()

  edit: (id)->
    @view = new PasswordView region: 'main'
  edit: (id)->
    @view = new PasswordView region: 'main'