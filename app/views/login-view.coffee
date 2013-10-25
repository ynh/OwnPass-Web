View = require 'views/base/view'

module.exports = class LoginView extends View
  autoRender: true
  className: 'home-page'
  template: require './templates/login'
