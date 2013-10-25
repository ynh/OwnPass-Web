AppController = require 'controllers/base/appcontroller'
HeaderView = require 'views/home/header-view'
HomePageView = require 'views/home/home-page-view'

module.exports = class HomeController extends AppController

  index: ->
    @view = new HomePageView region: 'main'
