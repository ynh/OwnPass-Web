View = require 'views/base/view'

module.exports = class HeaderView extends View
  autoRender: true
  className: 'navbar navbar-default'
  tagName: 'header'
  template: require './templates/header'
