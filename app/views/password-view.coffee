View = require 'views/base/view'

module.exports = class PasswordView extends View
  container: 'body'
  autoRender: true
  template: require './templates/password'
