CollectionView = require 'views/base/collection-view'
Location = require 'views/location-view'
LocationModel = require 'models/location'

module.exports = class LocationsView extends CollectionView
  container: 'body'
  listSelector:'.collection'
  autoRender: false
  itemView: Location
  template: require './templates/locations'