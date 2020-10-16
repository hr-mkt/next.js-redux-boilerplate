module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IlR1");


/***/ }),

/***/ "4DCN":
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "IlR1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ App; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: external "redux-logger"
var external_redux_logger_ = __webpack_require__("4DCN");

// CONCATENATED MODULE: ./src/middlewares/index.js
// import * as SigninMiddleware from './SigninMiddleware'
const mws = {
  // SigninMiddleware,
  MWS: {
    TICK_UPDATE: async (store, next, action) => {
      next({
        type: 'TICK',
        light: true,
        lastUpdate: Date.now()
      });
    }
  }
};

const getMiddleware = action => {
  for (const middleware in mws) {
    if (mws[middleware][action]) {
      return mws[middleware][action];
    }
  }

  return null;
};

const middlewares = store => next => action => {
  const middleware = getMiddleware(action.type);

  if (!middleware) {
    return next(action);
  }

  return middleware(store, next, action);
};
// CONCATENATED MODULE: ./src/reducers/index.js
 // import signIn from './signIn'

const app = (state = {}, action) => {
  let newState = Object.assign({}, state);

  if (action.type === 'TOGGLE_SIDE_BAR') {
    newState.sideBar = action.bool;
  }

  if (action.type === 'TICK') {
    newState.light = action.light;
    newState.lastUpdate = action.lastUpdate;
  }

  return newState;
};

const rootReducer = Object(external_redux_["combineReducers"])({
  app
});
/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__("oyvS");

// CONCATENATED MODULE: ./src/store/configureStore.prod.js







const configureStore = preloadedState => {
  const store = Object(external_redux_["createStore"])(reducers, preloadedState, Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a, middlewares), Object(external_redux_devtools_extension_["devToolsEnhancer"])()));

  if (false) {}

  return store;
};
const configureStore_prod_preloadedState = {
  app: {
    sideBar: false,
    page: 'reservation'
  }
};
// CONCATENATED MODULE: ./src/store/configureStore.dev.js







const configureStore_dev_configureStore = preloadedState => {
  const store = Object(external_redux_["createStore"])(reducers, preloadedState, Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a, middlewares, Object(external_redux_logger_["createLogger"])()), Object(external_redux_devtools_extension_["devToolsEnhancer"])()));

  if (false) {}

  return store;
};
const configureStore_dev_preloadedState = {
  app: {
    page: 'reservation',
    lastUpdate: '2020-11-11T10:00:00',
    light: ''
  }
};
// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__("KNus");
var config_default = /*#__PURE__*/__webpack_require__.n(config_);

// CONCATENATED MODULE: ./src/store/configureStore.js



const config = config_default()();
let configureStore_configureStore;
let configureStore_preloadedState;
console.log(config.NODE_ENV);

if (config.NODE_ENV === 'production') {
  configureStore_configureStore = configureStore;
  configureStore_preloadedState = configureStore_prod_preloadedState;
} else {
  configureStore_configureStore = configureStore_dev_configureStore;
  configureStore_preloadedState = configureStore_dev_preloadedState;
}


// CONCATENATED MODULE: ./src/pages/_app.js
var _jsxFileName = "/Users/makoto/dev/next.js/react-redux/src/pages/_app.js";

var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const _app_store = configureStore_configureStore(configureStore_preloadedState);
function App({
  Component,
  pageProps
}) {
  return __jsx(external_react_redux_["Provider"], {
    store: _app_store,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  })));
}

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ })

/******/ });