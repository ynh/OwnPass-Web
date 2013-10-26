View = require 'views/base/view'
module.exports = class LocationView extends View
  container: 'body'
  className: 'location_row'
  autoRender: true
  autoAttach: false
  template: require './templates/location'