module.exports = (match) ->
  match '', 'login#index'
  match 'register', 'login#register'
  match 'authorize/:devid/:devhash', 'login#authorize'
  match 'passwords', 'password#index'
  match 'passwords/:id', 'password#edit'
