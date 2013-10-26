Model = require '/models/base/model'
Utils = require 'lib/utils'

module.exports = class Password extends Model
	urlRoot: "https://ownpass.marcg.ch/passwords"
	sync:()->
		@set('username',Utils.encrypt(@get('username')))
		@set('password',Utils.encrypt(@get('password')))
		save = super
		return save
    parse: (resp, options)->
    	if resp.username?
    		resp.username = Utils.decrypt(resp.username)
    	if resp.password?
    		resp.password = Utils.decrypt(resp.password)
    	return resp