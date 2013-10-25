Controller = require 'controllers/base/controller'
HeaderView = require 'views/home/header-view'

module.exports = class HomeController extends Controller
  beforeAction: ->
    super
    @compose 'header', HeaderView, region: 'header'

