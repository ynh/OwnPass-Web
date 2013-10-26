module.exports = (match) ->
  match '', 'login#index'
  match 'register', 'login#register'
  match 'passwords', 'password#index'
  match 'passwords/:id', 'password#edit'
