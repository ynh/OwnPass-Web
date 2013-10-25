View = require 'views/base/view'
EditPasswordView = require 'views/password-edit-view'
module.exports = class PasswordView extends View
  container: 'body'
  autoRender: true
  template: require './templates/password'
  events:
    'click .edit': 'editPassword'

  initialize:->
    super
    console.log @model.toJSON()

  editPassword: (event) =>
    createNewPassword = =>
      container = $('<div>')
      @$el.html ""
      @$el.append(container)
      editPassword = new EditPasswordView {@model, container}
      editPassword.on 'dispose', @render
      @subview 'editPasswordForm', editPassword
    createNewPassword()