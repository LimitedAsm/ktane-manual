// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"gjZP":[function(require,module,exports) {
module.exports = "wires.d58ff50f.jpg";
},{}],"Yfzv":[function(require,module,exports) {
module.exports = "button.43169506.jpg";
},{}],"WCPc":[function(require,module,exports) {
module.exports = "keypads.c3a41e83.jpg";
},{}],"bvu8":[function(require,module,exports) {
module.exports = "simon_says.d23acf27.jpg";
},{}],"vD2b":[function(require,module,exports) {
module.exports = "who_on_first.dba3ddd9.jpg";
},{}],"oRV0":[function(require,module,exports) {
module.exports = "memory.a18562ce.jpg";
},{}],"cezH":[function(require,module,exports) {
module.exports = "morse_code.f8a4ba76.jpg";
},{}],"vTKW":[function(require,module,exports) {
module.exports = "complicated_wires.f22fbabf.jpg";
},{}],"Smrn":[function(require,module,exports) {
module.exports = "wire_sequences.a0d06e0a.jpg";
},{}],"fxlj":[function(require,module,exports) {
module.exports = "mazes.d6e1afc3.jpg";
},{}],"RJRX":[function(require,module,exports) {
module.exports = "passwords.2c2a9ef4.jpg";
},{}],"TpJv":[function(require,module,exports) {
module.exports = "knobs.16093154.jpg";
},{}],"UEoS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _wires = _interopRequireDefault(require("./assets/manual/page/wires.jpg"));
var _button = _interopRequireDefault(require("./assets/manual/page/button.jpg"));
var _keypads = _interopRequireDefault(require("./assets/manual/page/keypads.jpg"));
var _simon_says = _interopRequireDefault(require("./assets/manual/page/simon_says.jpg"));
var _who_on_first = _interopRequireDefault(require("./assets/manual/page/who_on_first.jpg"));
var _memory = _interopRequireDefault(require("./assets/manual/page/memory.jpg"));
var _morse_code = _interopRequireDefault(require("./assets/manual/page/morse_code.jpg"));
var _complicated_wires = _interopRequireDefault(require("./assets/manual/page/complicated_wires.jpg"));
var _wire_sequences = _interopRequireDefault(require("./assets/manual/page/wire_sequences.jpg"));
var _mazes = _interopRequireDefault(require("./assets/manual/page/mazes.jpg"));
var _passwords = _interopRequireDefault(require("./assets/manual/page/passwords.jpg"));
var _knobs = _interopRequireDefault(require("./assets/manual/page/knobs.jpg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  wires: _wires.default,
  button: _button.default,
  keypads: _keypads.default,
  simon_says: _simon_says.default,
  who_on_first: _who_on_first.default,
  memory: _memory.default,
  morse_code: _morse_code.default,
  complicated_wires: _complicated_wires.default,
  wire_sequences: _wire_sequences.default,
  mazes: _mazes.default,
  passwords: _passwords.default,
  knobs: _knobs.default
};
exports.default = _default;
},{"./assets/manual/page/wires.jpg":"gjZP","./assets/manual/page/button.jpg":"Yfzv","./assets/manual/page/keypads.jpg":"WCPc","./assets/manual/page/simon_says.jpg":"bvu8","./assets/manual/page/who_on_first.jpg":"vD2b","./assets/manual/page/memory.jpg":"oRV0","./assets/manual/page/morse_code.jpg":"cezH","./assets/manual/page/complicated_wires.jpg":"vTKW","./assets/manual/page/wire_sequences.jpg":"Smrn","./assets/manual/page/mazes.jpg":"fxlj","./assets/manual/page/passwords.jpg":"RJRX","./assets/manual/page/knobs.jpg":"TpJv"}],"kOoP":[function(require,module,exports) {
"use strict";

var _imagePages = _interopRequireDefault(require("./imagePages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var pageName = getQueryVariable("name");
function getQueryVariable(variable) {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(variable);
}
function withUpper(str) {
  var result = str;
  var firstChar = str.substring(0, 1);
  var formatFirstChar = firstChar.toUpperCase();
  result = formatFirstChar + result.substring(1);
  return result;
}
var titleElement = document.querySelector('title');
var title = withUpper(pageName);
titleElement.text = title;
document.head.appendChild(titleElement);
var page = document.createElement('img');
page.classList.add('manual-page');
page.src = _imagePages.default[pageName];
var container = document.querySelector('.container');
container.appendChild(page);
},{"./imagePages":"UEoS"}]},{},["kOoP"], null)
//# sourceMappingURL=manualPage.92dcddf8.js.map