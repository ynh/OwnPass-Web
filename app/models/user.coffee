Model = require '/models/base/model'
Utils = require 'lib/utils'

module.exports = class User extends Model
	urlRoot: "#{window.api}users"