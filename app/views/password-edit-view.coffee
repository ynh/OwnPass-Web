View = require 'views/base/view'
Utils = require 'lib/utils'

module.exports = class PasswordEditView extends View
  template: require './templates/password-edit'
  autoRender: true
  events:
    'click .cancel': 'cancel'
    'click .delete': 'delete'
    'click .save': 'save'
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
      
  save:(e)->
    e.preventDefault()
    self = @
    btn = $(e.target).closest('button')
    btn.button "loading"
    data = {site:@$el.find('.site').val(),phone:@$el.find('.phone').val(),username:Utils.encrypt(@$el.find('.username').val()),password:Utils.encrypt(@$el.find('.password').val())}
    @model.unset('new')
    @model.save(data)
      .done (response) =>
        self.ok = true
        self.model.fetch()
        self.cancel()
      .error (response) =>
        alert "Error"
      .always (response) =>
        btn.button "reset"

  cancel:()->
    @trigger 'dispose'
    @dispose()

  delete:()->
    @model.destroy()
    @trigger 'remove'
