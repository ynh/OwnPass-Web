
script = undefined
unless window.jQuery
  script = document.createElement("script")
  script.type = "text/javascript"
  script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js"
  document.body.appendChild script
(check_if_loaded = ->
  unless window.jQuery
    setTimeout check_if_loaded, 50
  else
    (($) ->
      (($) ->
        $.fn.extend leanModal: (options) ->
          close_modal = (modal_id) ->
            $("#lean_overlay").fadeOut 200
            $(modal_id).css display: "none"
          defaults =
            top: 100
            overlay: 0.5
            closeButton: null

          overlay = $("<div id='lean_overlay'></div>")
          $("body").append overlay
          options = $.extend(defaults, options)
          o = options
          modal_id = this
          $("#lean_overlay").click ->
            close_modal modal_id

          $(o.closeButton).click ->
            close_modal modal_id

          modal_height = $(modal_id).outerHeight()
          modal_width = $(modal_id).outerWidth()
          $("#lean_overlay").css
            display: "block"
            opacity: 0

          $("#lean_overlay").fadeTo 200, o.overlay
          $(modal_id).css
            display: "block"
            position: "fixed"
            opacity: 0
            "z-index": 11200000
            left: 50 + "%"
            "margin-left": -(modal_width / 2) + "px"
            top: o.top + "px"

          $(modal_id).fadeTo 200, 1

      ) jQuery
      style = """<style type="text/css">
      #test input{
        display: block;
width: 100%;
height: 34px;
padding: 6px 12px;
font-size: 14px;
line-height: 1.428571429;
color: #555555;
vertical-align: middle;
background-color: #ffffff;
border: 1px solid #cccccc;
border-radius: 4px;
-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
-webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
position: relative;
font-size: 16px;
height: auto;
padding: 10px;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
      }
      #lean_overlay {position: fixed;z-index:11000000;top: 0px;left: 0px;height:100%;width:100%;background: #000; display: none;}#test{width:600px;padding:30px;display:none;background:#FFF;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;box-shadow:0 0 4px rgba(0,0,0,.7);-webkit-box-shadow:0 0 4px rgba(0,0,0,.7);-moz-box-shadow:0 0 4px rgba(0,0,0,.7)}</style>"""
      $("head").append style
      el = $("""<div id="test" style="display: block; position: fixed; opacity: 1; z-index: 11200000; left: 50%; margin-left: -330px; top: 200px;">
        <input type="password" class="pw" placeholder="Master Password" >
        </div>"""); 
      $("body").append el
      el.leanModal()
    ) window.jQuery
)()