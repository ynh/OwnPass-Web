AppController = require 'controllers/base/appcontroller'
PasswordsView = require 'views/passwords-view'
PasswordView = require 'views/password-view'
Collection = require 'models/base/collection'
Password = require 'models/password'

module.exports = class PasswordsController extends AppController

  index: ->
    @passwords = new Collection [{'site':'http://www.reddit.com/r/programming/','domain':'www.reddit.com'},{'site':'http://www.google.com','domain':'www.google.com'},{'site':'http://www.twitter.com/','domain':'www.twitter.com'}], model: Password  
    @view = new PasswordsView collection: @passwords, region: 'main'
    # @passwords.fetch().then @view.render

  edit: (id)->
    @view = new PasswordView region: 'main'