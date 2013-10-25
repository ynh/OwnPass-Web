CollectionView = require 'views/base/collection-view'
Password = require 'views/password-view'

module.exports = class PasswordsView extends CollectionView
  container: 'body'
  autoRender: true
  itemView: Password 
