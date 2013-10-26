View = require 'views/base/view'

module.exports = class PasswordEditView extends View
  template: require './templates/password-edit'
  autoRender: true
  events:
    'click .cancel': 'cancel'
    'click .save': 'save'
  save:(e)->
    e.preventDefault()
    btn = $(e.target).closest('button')
    btn.button "loading"
    data = {site:@$el.find('.site').val(),username:@$el.find('.username').val(),password:@$el.find('.password').val()}
    @model.unset('new')
    @model.save(data)
      .done (response) =>
        alert "OK"
      .error (response) =>
        alert "Error"
      .always (response) =>
        btn.button "reset"
  cancel:()->
    @trigger 'dispose'
    @dispose()
