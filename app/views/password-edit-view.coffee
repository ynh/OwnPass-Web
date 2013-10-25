View = require 'views/base/view'

module.exports = class PasswordEditView extends View
  template: require './templates/password-edit'
  autoRender: true
  events:
    'click .cancel': 'cancel'
  cancel:()->
    @trigger 'dispose'
    @dispose()
