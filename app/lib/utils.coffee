# Application-specific utilities
# ------------------------------

# Delegate to Chaplin’s utils module.
utils = Chaplin.utils.beget Chaplin.utils

CryptoJS = require 'lib/cryptojs'
# _(utils).extend
#  someMethod: ->
_(utils).extend
   hash_password: (email, pw)->
     return CryptoJS.SHA256(pw).toString(CryptoJS.enc.Base64);
   get_secret: ()->
     return CryptoJS.SHA256(window.user.plainpw).toString(CryptoJS.enc.Base64);
   get_iv: ()->
     return CryptoJS.SHA256(window.user.plainpw).toString(CryptoJS.enc.Base64);
   encrypt: (message)->
     cr = CryptoJS.AES.encrypt(message, utils.get_secret())
     return cr.iv.toString(CryptoJS.enc.Base64)+":"+cr.salt.toString(CryptoJS.enc.Base64)+":"+cr.ciphertext.toString(CryptoJS.enc.Base64)
   decrypt: (message)->
     parts = message.split(":") 
     return CryptoJS.AES.decrypt(
          CryptoJS.lib.CipherParams.create({
              iv: CryptoJS.enc.Base64.parse(parts[0])
              ciphertext: CryptoJS.enc.Base64.parse(parts[2])
              salt: CryptoJS.enc.Base64.parse(parts[1])
              })
        , utils.get_secret()).toString(CryptoJS.enc.Utf8)

# Prevent creating new properties and stuff.
Object.seal? utils

module.exports = utils
