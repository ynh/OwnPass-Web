module.exports = (match) ->
  match '', 'login#index'
  match 'passwords', 'password#index'
  match 'passwords/:id', 'password#edit'
