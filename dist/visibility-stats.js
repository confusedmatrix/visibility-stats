(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("VisibilityStats", [], factory);
	else if(typeof exports === 'object')
		exports["VisibilityStats"] = factory();
	else
		root["VisibilityStats"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VisibilityStats = exports.VisibilityStats = function () {
    function VisibilityStats(selector) {
        var _this = this;

        _classCallCheck(this, VisibilityStats);

        this.elements = [].concat(_toConsumableArray(document.querySelectorAll(selector))).map(function (el) {
            var visible = _this._isVisible(el, window.scrollY, window.innerHeight);
            return {
                element: el,
                visibleNow: visible,
                lastSeen: visible ? Date.now() : null,
                timeOnScreen: 0
            };
        });
        this._monitor();
    }

    _createClass(VisibilityStats, [{
        key: "getVisibleElements",
        value: function getVisibleElements() {
            return this.elements.filter(function (el) {
                return el.visibleNow;
            });
        }
    }, {
        key: "getStats",
        value: function getStats() {
            return this.elements;
        }
    }, {
        key: "_isVisible",
        value: function _isVisible(element, winScrollY, winHeight) {
            var bounds = element.getBoundingClientRect();
            return bounds.y < winHeight && bounds.y + bounds.height > 0;
        }
    }, {
        key: "_monitor",
        value: function _monitor() {
            var _this2 = this;

            var winScrollY = window.scrollY;
            var winHeight = window.innerHeight;

            window.requestAnimationFrame(function () {
                _this2.elements = _this2.elements.map(function (el) {
                    var visible = _this2._isVisible(el.element, window.scrollY, window.innerHeight);
                    return _extends({}, el, {
                        visibleNow: visible,
                        lastSeen: visible ? Date.now() : null,
                        timeOnScreen: el.timeOnScreen + Date.now() - (el.lastSeen || Date.now())
                    });
                });
                _this2._monitor();
            });
        }
    }]);

    return VisibilityStats;
}();

exports.default = VisibilityStats;

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=visibility-stats.js.map