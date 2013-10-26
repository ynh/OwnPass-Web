CollectionView = require 'views/base/collection-view'
Password = require 'views/password-view'
PasswordModel = require 'models/password'

module.exports = class PasswordsView extends CollectionView
  container: 'body'
  listSelector:'.collection'
  autoRender: false
  itemView: Password 
  template: require './templates/passwords'
  events:
    'click .add': 'addPassword'
  addPassword:()->
  	pwview = new Password model:new PasswordModel({'new':true})
  	pwview.render()
  	@$el.find('.collection').prepend(pwview.el)
  	pwview.editPassword()

