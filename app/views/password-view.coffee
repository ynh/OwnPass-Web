View = require 'views/base/view'
EditPasswordView = require 'views/password-edit-view'
Utils = require 'lib/utils'
module.exports = class PasswordView extends View
  container: 'body'
  className: 'password_row'
  autoRender: true
  autoAttach: false
  template: require './templates/password'
  events:
    'click .edit': 'editPassword'

  initialize:->
    super
    console.log @model.toJSON()

  getTemplateData:()->
    data = @model.toJSON()
    if data.username?
        data.username = Utils.decrypt(data.username)
      if data.password?
        data.password = Utils.decrypt(data.password)
      if data.site?
        a = $('<a>',{href: data.site})[0]
        data.domain = a.hostname
      return data

  editPassword: (event) =>
    self = @
    createNewPassword = =>
      container = $('<div>')
      @$el.html ""
      @$el.append(container)
      editPassword = new EditPasswordView {@model, container} 
      editPassword.on 'remove', @dispose
      if @model.get('new') == undefined
        editPassword.on 'dispose', self.render
      else
        editPassword.on 'dispose', ()->
          if not self.model.isNew() and not self.model.isNew()
            self.render()
          else
            self.dispose()
      @subview 'editPasswordForm', editPassword
    createNewPassword()