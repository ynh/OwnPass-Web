View = require 'views/base/view'
EditPasswordView = require 'views/password-edit-view'
module.exports = class PasswordView extends View
  container: 'body'
  className: 'password_row'
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
      if @model.get('new') == undefined
        editPassword.on 'dispose', @render
      else
        editPassword.on 'dispose', @dispose
      @subview 'editPasswordForm', editPassword
    createNewPassword()