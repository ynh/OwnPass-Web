# Application-specific view helpers
# http://handlebarsjs.com/#helpers
# --------------------------------
register = (name, fn) ->
  Handlebars.registerHelper name, fn

# Map helpers
# -----------

# Make 'with' behave a little more mustachey.
register 'with', (context, fn) ->
  if not context or Handlebars.Utils.isEmpty context
    options.inverse(this)
  else
    options.fn(context)

register 'withUser', (context, fn) ->
  context.fn(window.user||{email:""})
register 'withWindow', (context, fn) ->
  context.fn(window)

# Inverse for 'with'.
register 'without', (context, options) ->
  inverse = options.inverse
  options.inverse = options.fn
  options.fn = inverse
  Handlebars.helpers.with.call(this, context, options)

# Get Chaplin-declared named routes. {{url "likes#show" "105"}}
register 'url', (routeName, params..., options) ->
  Chaplin.helpers.reverse routeName, params

