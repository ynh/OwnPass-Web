(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';

    if (has(cache, path)) return cache[path].exports;
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex].exports;
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  var list = function() {
    var result = [];
    for (var item in modules) {
      if (has(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.list = list;
  globals.require.brunch = true;
})();
require.register("application", function(exports, require, module) {
var Application, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

module.exports = Application = (function(_super) {
  __extends(Application, _super);

  function Application() {
    _ref = Application.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  return Application;

})(Chaplin.Application);
});

;require.register("controllers/base/controller", function(exports, require, module) {
var Controller, SiteView, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

SiteView = require('views/site-view');

module.exports = Controller = (function(_super) {
  __extends(Controller, _super);

  function Controller() {
    _ref = Controller.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Controller.prototype.beforeAction = function() {
    return this.compose('site', SiteView);
  };

  return Controller;

})(Chaplin.Controller);
});

;require.register("controllers/home-controller", function(exports, require, module) {
var Controller, HeaderView, HomeController, HomePageView, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Controller = require('controllers/base/controller');

HeaderView = require('views/home/header-view');

HomePageView = require('views/home/home-page-view');

module.exports = HomeController = (function(_super) {
  __extends(HomeController, _super);

  function HomeController() {
    _ref = HomeController.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  HomeController.prototype.beforeAction = function() {
    HomeController.__super__.beforeAction.apply(this, arguments);
    return this.compose('header', HeaderView, {
      region: 'header'
    });
  };

  HomeController.prototype.index = function() {
    return this.view = new HomePageView({
      region: 'main'
    });
  };

  return HomeController;

})(Controller);
});

;require.register("controllers/login-controller", function(exports, require, module) {
var Controller, LoginView, LoginsController, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Controller = require('controllers/base/controller');

LoginView = require('views/login-view');

module.exports = LoginsController = (function(_super) {
  __extends(LoginsController, _super);

  function LoginsController() {
    _ref = LoginsController.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  LoginsController.prototype.index = function() {
    return this.view = new LoginView({
      region: 'main'
    });
  };

  return LoginsController;

})(Controller);
});

;require.register("controllers/user-controller", function(exports, require, module) {
var Controller, UsersController, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Controller = require('controllers/base/controller');

module.exports = UsersController = (function(_super) {
  __extends(UsersController, _super);

  function UsersController() {
    _ref = UsersController.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  return UsersController;

})(Controller);
});

;require.register("initialize", function(exports, require, module) {
var Application, routes;

Application = require('application');

routes = require('routes');

$(function() {
  return new Application({
    title: 'Brunch example application',
    controllerSuffix: '-controller',
    routes: routes
  });
});
});

;require.register("lib/utils", function(exports, require, module) {
var utils;

utils = Chaplin.utils.beget(Chaplin.utils);

if (typeof Object.seal === "function") {
  Object.seal(utils);
}

module.exports = utils;
});

;require.register("lib/view-helper", function(exports, require, module) {
var register,
  __slice = [].slice;

register = function(name, fn) {
  return Handlebars.registerHelper(name, fn);
};

register('with', function(context, options) {
  if (!context || Handlebars.Utils.isEmpty(context)) {
    return options.inverse(this);
  } else {
    return options.fn(context);
  }
});

register('without', function(context, options) {
  var inverse;
  inverse = options.inverse;
  options.inverse = options.fn;
  options.fn = inverse;
  return Handlebars.helpers["with"].call(this, context, options);
});

register('url', function() {
  var options, params, routeName, _i;
  routeName = arguments[0], params = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), options = arguments[_i++];
  return Chaplin.helpers.reverse(routeName, params);
});
});

;require.register("mediator", function(exports, require, module) {
var mediator;

mediator = module.exports = Chaplin.mediator;
});

;require.register("models/base/collection", function(exports, require, module) {
var Collection, Model, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Model = require('./model');

module.exports = Collection = (function(_super) {
  __extends(Collection, _super);

  function Collection() {
    _ref = Collection.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Collection.prototype.model = Model;

  return Collection;

})(Chaplin.Collection);
});

;require.register("models/base/model", function(exports, require, module) {
var Model, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

module.exports = Model = (function(_super) {
  __extends(Model, _super);

  function Model() {
    _ref = Model.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  return Model;

})(Chaplin.Model);
});

;require.register("models/password", function(exports, require, module) {
var Model, Password, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Model = require('/models/base/model');

module.exports = Password = (function(_super) {
  __extends(Password, _super);

  function Password() {
    _ref = Password.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  return Password;

})(Model);
});

;require.register("models/user", function(exports, require, module) {
var Model, User, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Model = require('/models/base/model');

module.exports = User = (function(_super) {
  __extends(User, _super);

  function User() {
    _ref = User.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  return User;

})(Model);
});

;require.register("routes", function(exports, require, module) {
module.exports = function(match) {
  return match('', 'login#index');
};
});

;require.register("views/base/collection-view", function(exports, require, module) {
var CollectionView, View, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('./view');

module.exports = CollectionView = (function(_super) {
  __extends(CollectionView, _super);

  function CollectionView() {
    _ref = CollectionView.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  CollectionView.prototype.getTemplateFunction = View.prototype.getTemplateFunction;

  return CollectionView;

})(Chaplin.CollectionView);
});

;require.register("views/base/view", function(exports, require, module) {
var View, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

require('lib/view-helper');

module.exports = View = (function(_super) {
  __extends(View, _super);

  function View() {
    _ref = View.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  View.prototype.optionNames = Chaplin.View.prototype.optionNames.concat(['template']);

  View.prototype.getTemplateFunction = function() {
    return this.template;
  };

  return View;

})(Chaplin.View);
});

;require.register("views/home/header-view", function(exports, require, module) {
var HeaderView, View, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('views/base/view');

module.exports = HeaderView = (function(_super) {
  __extends(HeaderView, _super);

  function HeaderView() {
    _ref = HeaderView.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  HeaderView.prototype.autoRender = true;

  HeaderView.prototype.className = 'navbar navbar-default';

  HeaderView.prototype.tagName = 'header';

  HeaderView.prototype.template = require('./templates/header');

  return HeaderView;

})(View);
});

;require.register("views/home/home-page-view", function(exports, require, module) {
var HomePageView, View, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('views/base/view');

module.exports = HomePageView = (function(_super) {
  __extends(HomePageView, _super);

  function HomePageView() {
    _ref = HomePageView.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  HomePageView.prototype.autoRender = true;

  HomePageView.prototype.className = 'home-page';

  HomePageView.prototype.template = require('./templates/home');

  return HomePageView;

})(View);
});

;require.register("views/home/templates/header", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">OwnPass</a>\n        </div>\n        <div class=\"navbar-collapse collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"active\"><a href=\"#\">Passwords</a></li>\n            <li><a href=\"#\">Users</a></li> \n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li><a href=\"https://github.com/KarlKode/OwnPass-Web\"><i class=\"fa fa-github\"></i> Github</a></li> \n          </ul>\n        </div><!--/.nav-collapse -->\n\n";
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/home/templates/home", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return " <div class=\"jumbotron\">\n        <h1>Navbar example</h1>\n        <p>This example is a quick exercise to illustrate how the default, static navbar and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>\n        <p>\n          <a class=\"btn btn-lg btn-primary\" href=\"../../components/#navbar\">View navbar docs &raquo;</a>\n        </p>\n      </div>\n";
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/login-view", function(exports, require, module) {
var LoginView, View, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('views/base/view');

module.exports = LoginView = (function(_super) {
  __extends(LoginView, _super);

  function LoginView() {
    _ref = LoginView.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  LoginView.prototype.autoRender = true;

  LoginView.prototype.className = 'home-page';

  LoginView.prototype.template = require('./templates/login');

  return LoginView;

})(View);
});

;require.register("views/site-view", function(exports, require, module) {
var SiteView, View, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('views/base/view');

module.exports = SiteView = (function(_super) {
  __extends(SiteView, _super);

  function SiteView() {
    _ref = SiteView.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  SiteView.prototype.container = 'body';

  SiteView.prototype.id = 'site-container';

  SiteView.prototype.regions = {
    header: '#header-container',
    main: '#page-container'
  };

  SiteView.prototype.template = require('./templates/site');

  return SiteView;

})(View);
});

;require.register("views/templates/login", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return " <form class=\"form-signin\">\n 	<div class=\"logocontainer\">\n 	<i class=\"fa logo fa-key\"></i>\n </div>\n        <h2 class=\"form-signin-heading\">Please sign in</h2>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Email address\" autofocus>\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n        <label class=\"checkbox\">\n          <input type=\"checkbox\" value=\"remember-me\"> Remember me\n        </label>\n        <button class=\"btn btn-lg btn-primary btn-block signin\" type=\"submit\">Sign in</button>\n      </form>";
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/templates/site", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return " <div class=\"container\">\n<div class=\"header-container\" id=\"header-container\"></div>\n\n<div class=\"outer-page-container\">\n  <div class=\"page-container\" id=\"page-container\">\n  </div>\n</div>\n</div>\n";
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;
//# sourceMappingURL=app.js.map