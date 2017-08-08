require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' && (typeof module === 'undefined' ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define("veams", [], factory);else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["veams"] = factory();else root["veams"] = root["veams"] || {}, root["veams"]["veams"] = factory();
})(undefined, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};
			/******/
			/******/ // The require function
			/******/function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;
				/******/
				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };
				/******/
				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				/******/
				/******/ // Flag the module as loaded
				/******/module.loaded = true;
				/******/
				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;
			/******/
			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";
			/******/
			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			/**
    * Imports
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _starter = __webpack_require__(11);

			var _starter2 = _interopRequireDefault(_starter);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			/**
    * Variables
    */

			exports.default = _starter2.default;
			module.exports = exports['default'];

			/***/
		},,,
		/* 1 */
		/* 2 */
		/* 3 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = mixin;

			var _defaults = __webpack_require__(4);

			var _defaults2 = _interopRequireDefault(_defaults);

			var _methodExtend = __webpack_require__(5);

			var _methodExtend2 = _interopRequireDefault(_methodExtend);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			/**
    * Merge method functions.
    *
    * @param {Object} from - Mixin object which will be merged via Helpers.defaults with the methods of our class
    * @param {Array} methods - Array of method names which will be extended.
    */
			function mixin(from) {
				var methods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['initialize', 'render'];

				if (from === undefined) {
					console.error('VeamsHelpers : Mixin :: Mixin not found!');

					return;
				}

				var to = this.prototype;

				/** Add those methods which exists on `from` but not on `to` to the latter */
				(0, _defaults2.default)(to, from);

				/** we do the same for events */
				if (to.events) {
					(0, _defaults2.default)(to.events, from.events);
				}

				// Extend to's methods
				methods.forEach(function (method) {
					(0, _methodExtend2.default)(to, from, method);
				});
			};
			module.exports = exports['default'];

			/***/
		},
		/* 4 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Simple extend method, which extends an object.
    *
    * @param {Object} obj - object which will be extended
    *
    * @return {Object} obj - extended object
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = defaultsHelper;
			function defaultsHelper(obj) {
				[].slice.call(arguments, 1).forEach(function (item) {
					for (var key in item) {
						if (obj[key] === undefined) obj[key] = item[key];
					}
				});
				return obj;
			};
			module.exports = exports['default'];

			/***/
		},
		/* 5 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Helper method to extend an already existing method.
    *
    * @param {Object} to - view which will be extended
    * @param {Object} from - methods which comes from mixin
    * @param {string} methodName - function name
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = methodExtend;
			function methodExtend(to, from, methodName) {
				function isUndefined(value) {
					return typeof value === 'undefined';
				}

				if (from === undefined) return;

				// if the method is defined on from ...
				if (!isUndefined(from[methodName])) {
					var old = to[methodName];

					// ... we create a new function on to
					to[methodName] = function () {

						// wherein we first call the method which exists on `to`
						var oldReturn = old.apply(this, arguments);

						// and then call the method on `from`
						from[methodName].apply(this, arguments);

						// and then return the expected result,
						// i.e. what the method on `to` returns
						return oldReturn;
					};
				}
			};
			module.exports = exports['default'];

			/***/
		},
		/* 6 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Simple extend method to extend the properties of an object.
    *
    * @param {Object} obj - object which will be extended
    *
    * @return {Object} obj - extended object
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = extend;
			function extend(obj) {
				[].slice.call(arguments, 1).forEach(function (item) {
					for (var key in item) {
						obj[key] = item[key];
					}
				});
				return obj;
			};
			module.exports = exports['default'];

			/***/
		},
		/* 7 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Generates numeric id.
    *
    * @param {Number} [segments=1] - number of segments of generated id (segments consist of 10 digits, separated by '-').
    *
    * @return {String} - generated id
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = makeId;
			function makeId() {
				var segments = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

				var crypto = window.crypto || window.msCrypto;
				var array = crypto.getRandomValues(new Uint32Array(segments));
				var id = '';
				var i = 0;

				for (; i < array.length; i++) {
					id += array[i] + '-';
				}

				return id.slice(0, -1);
			};
			module.exports = exports['default'];

			/***/
		},,,,
		/* 8 */
		/* 9 */
		/* 10 */
		/* 11 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			/**
    * Polyfills
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			__webpack_require__(12);

			var _core = __webpack_require__(13);

			var _core2 = _interopRequireDefault(_core);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			var Veams = {};

			/**
    * Imports
    */

			(function (window, document, undefined) {
				'use strict';

				Veams = new _core2.default({
					namespace: 'Veams',
					addToGlobal: true
				});

				Veams.initialize();
			})(window, document);

			exports.default = Veams;
			module.exports = exports['default'];

			/***/
		},
		/* 12 */
		/***/function (module, exports) {

			'use strict';

			// Polyfill for custom events

			(function () {
				if (typeof window.CustomEvent === 'function') return false;

				function CustomEvent(event, params) {
					var evt = document.createEvent('CustomEvent');

					params = params || { bubbles: false, cancelable: false, detail: undefined };

					evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
					return evt;
				}

				CustomEvent.prototype = window.Event.prototype;

				window.CustomEvent = CustomEvent;
			})();

			/***/
		},
		/* 13 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
					}
				}return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
				};
			}(); /**
         * Represents VeamsCore.
         * @module VeamsCore
         *
         * @author Sebastian Fitzner
         */

			__webpack_require__(12);

			var _use = __webpack_require__(14);

			var _use2 = _interopRequireDefault(_use);

			var _events = __webpack_require__(15);

			var _events2 = _interopRequireDefault(_events);

			var _helpers = __webpack_require__(16);

			var _helpers2 = _interopRequireDefault(_helpers);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			var initState = false;

			var VeamsCore = function () {
				function VeamsCore(opts) {
					_classCallCheck(this, VeamsCore);

					this._options = {
						namespace: 'Veams',
						addToGlobal: false
					};

					this.base = {
						name: 'Veams',
						version: '5.0.0-rc19'
					};

					this.use = _use2.default.bind(this);
					this.Plugins = {};
					this.EVENTS = _events2.default;
					this.helpers = {};
					this.detections = {
						width: window.innerWidth,
						height: window.innerHeight
					};

					initState = false;

					this.setup(opts);
				}

				_createClass(VeamsCore, [{
					key: 'setup',
					value: function setup(opts) {
						this.use(_helpers2.default);

						this.detections = this.helpers.extend({
							touch: this.helpers.isTouch()
						}, this.detections);

						this.options = opts;
					}
				}, {
					key: 'initialize',
					value: function initialize(opts) {
						if (initState === true) {
							return console.info('Veams :: You already initialized Veams!');
						}

						/**
       * Set global options on initialize
       */
						this.options = opts;

						if (this.options.addToGlobal) {
							if (window && !window[this.options.namespace]) {
								window[this.options.namespace] = this || {};
							}
						}

						initState = true;
					}
				}, {
					key: 'onInitialize',
					value: function onInitialize(cb) {
						if (!cb || typeof cb !== 'function') {
							console.log('Veams :: Callback is not a function!');
							return;
						}

						if (initState === false) {
							this.initialize();
						}

						cb();
					}
				}, {
					key: 'onDOMReady',
					value: function onDOMReady(cb) {
						if (typeof cb !== 'function') {
							console.log('Veams :: Callback is not a function!');
							return;
						}
						document.addEventListener('DOMContentLoaded', cb);
					}
				}, {
					key: 'version',
					set: function set(version) {
						this._version = version;
					},
					get: function get() {
						return this._version;
					}
				}, {
					key: 'initialized',
					set: function set(bool) {
						this._initialized = bool;
					},
					get: function get() {
						return this._initialized;
					}
				}, {
					key: 'options',
					set: function set(options) {
						this._options = this.helpers.extend(this.options, options || {});
					},
					get: function get() {
						return this._options;
					}
				}]);

				return VeamsCore;
			}();

			exports.default = VeamsCore;
			module.exports = exports['default'];

			/***/
		},
		/* 14 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Represents a simple plugin system in which `this` is Veams.
    * @module plugin
    *
    * @author Sebastian Fitzner
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			exports.default = function (plugin) {
				if (plugin.pluginName) {
					this.Plugins[plugin.pluginName] = plugin;
				}

				for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}

				plugin.initialize.apply(plugin, [this].concat(args));
			};

			module.exports = exports['default'];

			/***/
		},
		/* 15 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Const for events (pub/sub)
    *
    * @author: Sebastian Fitzner
    */

			/**
    * Events Global
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			var EVENTS = {
				blur: 'blur',
				change: 'change',
				click: 'click',
				dblclick: 'dblclick',
				DOMchanged: 'dom:changed',
				DOMredirect: 'dom:redirect',
				hashchange: 'hashchange',
				input: 'input',
				keydown: 'keydown',
				keypress: 'keypress',
				keyup: 'keyup',
				mediachange: 'mediachange',
				moduleCached: 'module:cached',
				mousedown: 'mousedown',
				mouseenter: 'mouseenter',
				mouseleave: 'mouseleave',
				mouseout: 'mouseout',
				mouseover: 'mouseover',
				mouseup: 'mouseup',
				reset: 'reset',
				resize: 'resize',
				scroll: 'scroll',
				submit: 'submit',
				swipe: 'swipe'
			};

			exports.default = EVENTS;
			module.exports = exports['default'];

			/***/
		},
		/* 16 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
				return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			} : function (obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			};

			var _extend = __webpack_require__(6);

			var _extend2 = _interopRequireDefault(_extend);

			var _mixin = __webpack_require__(3);

			var _mixin2 = _interopRequireDefault(_mixin);

			var _methodExtend = __webpack_require__(5);

			var _methodExtend2 = _interopRequireDefault(_methodExtend);

			var _isTouch = __webpack_require__(17);

			var _isTouch2 = _interopRequireDefault(_isTouch);

			var _throttle = __webpack_require__(18);

			var _throttle2 = _interopRequireDefault(_throttle);

			var _querySelectorArray = __webpack_require__(19);

			var _querySelectorArray2 = _interopRequireDefault(_querySelectorArray);

			var _forEach = __webpack_require__(20);

			var _forEach2 = _interopRequireDefault(_forEach);

			var _makeId = __webpack_require__(7);

			var _makeId2 = _interopRequireDefault(_makeId);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			var VeamsHelpers = {
				pluginName: 'Helpers',
				initialize: function initialize(Veams) {
					Veams.addHelper = function addHelper() {
						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}

						var params = [].concat(args);

						if (params.length === 1) {
							if (_typeof(params[0]) !== 'object') {
								console.error('VeamsHelpers :: You need to pass an object!');
								return;
							}

							for (var key in params[0]) {
								if (params[0].hasOwnProperty(key)) {
									if (!Veams.helpers[key]) {
										Veams.helpers[key] = params[0][key];
									} else {
										console.info('VeamsHelpers :: The helper ' + key + ' is already defined! Please define a new name for: ', params[0][key]);
									}
								}
							}
						} else if (params.length === 2) {

							if (!Veams.helpers[params[0]]) {
								if (typeof params[0] !== 'string' || typeof params[1] !== 'function') {
									console.error('VeamsHelpers :: You need to pass a string as first argument and the helper function as second one.');
									return;
								}
								Veams.helpers[params[0]] = params[1];
							} else {
								console.info('VeamsHelpers :: The helper ' + params[0] + ' is already defined! Please define a new name for: ', params[1]);
							}
						}
					};

					this.addDefaultHelpers(Veams);
				},

				addDefaultHelpers: function addDefaultHelpers(Veams) {
					Veams.addHelper('querySelectorArray', _querySelectorArray2.default);
					Veams.addHelper('extend', _extend2.default);
					Veams.addHelper('isTouch', _isTouch2.default);
					Veams.addHelper('mixin', _mixin2.default);
					Veams.addHelper('methodExtend', _methodExtend2.default);
					Veams.addHelper('throttle', _throttle2.default);
					Veams.addHelper('forEach', _forEach2.default);
					Veams.addHelper('makeId', _makeId2.default);
				}
			};

			exports.default = VeamsHelpers;
			module.exports = exports['default'];

			/***/
		},
		/* 17 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Touch Detection
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = isTouch;
			function isTouch() {
				return 'ontouchstart' in window;
			};
			module.exports = exports['default'];

			/***/
		},
		/* 18 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Throttle method for resize events and more
    *
    * @param {function} func - Function which will be executed.
    * @param {number} wait - number to wait in milliseconds.
    * @param {boolean} immediate - execute function immediately.
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = throttle;
			function throttle(func, wait, immediate) {
				var timeout = void 0;

				return function () {
					var context = this;
					var args = arguments;
					var callNow = immediate && !timeout;
					var later = function later() {
						timeout = null;
						if (!immediate) func.apply(context, args);
					};

					clearTimeout(timeout);

					timeout = setTimeout(later, wait);

					if (callNow) func.apply(context, args);
				};
			};
			module.exports = exports['default'];

			/***/
		},
		/* 19 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Get dom elements in an array
    *
    * @param {String} elem - Required: selector
    * @param {Object} [context] - Optional: context
    *
    * @return {Array}
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = querySelectorArray;
			function querySelectorArray(elem, context) {
				if (!elem) throw new Error('In order to work with querySelectorArray you need to define an element as string!');
				var el = elem;
				var customContext = context || document;

				return Array.prototype.slice.call(customContext.querySelectorAll(el));
			};
			module.exports = exports['default'];

			/***/
		},
		/* 20 */
		/***/function (module, exports) {

			'use strict';

			/**
    * Simple forEach method
    *
    * @param {Array} array - array of objects
    * @param {function} callback - callback function
    * @param {string} scope - scope of function
    */

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.default = forEach;
			function forEach(array, callback, scope) {
				for (var i = 0; i < array.length; i++) {
					callback.call(scope, i, array[i]);
				}
			};
			module.exports = exports['default'];

			/***/
		}
		/******/])
	);
});
;


},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var VeamsDOM = {
	options: {
		DOM: false
	},
	pluginName: '$',
	initialize: function initialize(Veams, _ref) {
		var DOM = _ref.DOM;

		if (!DOM) {
			console.error('VeamsDOM :: You need to pass an options object with a DOM handler: options.DOM!');
			return;
		}
		if (Veams.$) {
			console.log('VeamsDOM :: It seems that you have already defined a DOM handler. I am overwriting it now for you ;)');
		}

		Veams.$ = this.options.DOM = DOM;
	}
};

exports.default = VeamsDOM;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var VeamsLogger = {
	pluginName: 'Logger',
	initialize: function initialize(Veams) {
		/**
   * Devmode and logger
   */
		Veams.devmode = false;
		Veams.logger = false;

		if (document.location.search.indexOf('devmode') > -1) {
			Veams.devmode = true;
		}

		if (document.location.search.indexOf('logger') > -1) {
			Veams.logger = true;
		}

		// hide all warnings and logs if not in devmode
		if (!Veams.devmode) {
			console.log = console.warn = function () {};
		}

		// add console output element (triggered by parameter 'devmode' and 'logger' in url)
		if (Veams.devmode && Veams.logger) {
			var logger = document.createElement('pre');

			logger.setAttribute('id', 'logger');
			document.body.appendChild(logger);

			console.write = function () {
				for (var i = 0; i < arguments.length; i++) {
					if (_typeof(arguments[i]) === 'object') {
						logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
					} else {
						logger.innerHTML += arguments[i] + '<br />';
					}
				}

				logger.innerHTML += '<br />';
				logger.scrollTop = logger.scrollHeight;
			};

			console.error = function () {
				logger.innerHTML += '[Error]<br />';
				console.write.apply(this, arguments);
			};

			console.warn = function () {
				logger.innerHTML += '[Warn]<br />';
				console.write.apply(this, arguments);
			};

			console.log = function () {
				logger.innerHTML += '[Log]<br />';
				console.write.apply(this, arguments);
			};
		}
	}
};

exports.default = VeamsLogger;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
'use strict';

/**
 * Imports
 */

Object.defineProperty(exports, "__esModule", {
	value: true
});
var VeamsMediaQueryHandler = {
	options: {
		mediaQueryProp: 'font-family',
		delay: 300
	},
	pluginName: 'MediaQueryHandler',
	initialize: function initialize(Veams, opts) {
		var _this = this;

		// Media Query
		var head = document.querySelectorAll('head');

		if (opts) {
			this.options = Veams.helpers.extend(this.options, opts || {});
		}

		/**
   * Add current media query to Veams
   */
		Veams.currentMedia = window.getComputedStyle(head[0], null).getPropertyValue(this.options.mediaQueryProp);

		if (!Veams.Vent) {
			console.info('VeamsMediaQueryHandler :: In order to work properly with the VeamsMediaQueryHandler plugin you should add the VeamsVent plugin!');
		}

		// Trigger global resize event
		window.onresize = Veams.helpers.throttle(function (e) {
			var currentMedia = window.getComputedStyle(head[0], null).getPropertyValue(_this.options.mediaQueryProp);
			var width = window.innerWidth;

			if (currentMedia !== Veams.currentMedia) {
				var oldMedia = Veams.currentMedia;

				Veams.currentMedia = currentMedia;

				console.info('VeamsMediaQueryHandler :: Current media is ' + Veams.currentMedia);

				if (Veams.Vent) {
					Veams.Vent.trigger(Veams.EVENTS.mediachange, {
						type: Veams.EVENTS.mediachange,
						currentMedia: currentMedia,
						oldMedia: oldMedia
					});
				}
			}

			if (width !== Veams.detections.width) {
				Veams.detections.width = width;
				Veams.Vent.trigger(Veams.EVENTS.resize, e);
			}
		}, this.options.delay);
	}
};

exports.default = VeamsMediaQueryHandler;
module.exports = exports['default'];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Veams = {};
var __cache = [];
var __register = {
	modulesInRegister: [],
	modulesOnConditions: [],
	modulesOnInit: [],
	modulesInContext: []
};

/**
 * TODO: Clean up mutation observer
 */

/**
 * - Get modules in DOM
 * - Get classes and options from init process
 * - Split up conditional modules from initial modules
 * - Init other modules
 * - Bind events when available from conditional modules
 * -
 */

var Modules = function () {
	function Modules() {
		var VEAMS = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.Veams;
		var opts = arguments[1];

		_classCallCheck(this, Modules);

		Veams = VEAMS;

		this.options = opts;

		if (!this.options.internalCacheOnly) {
			this._cache = __cache; // Module list
		}

		if (!this.options.internalRegisterOnly) {
			this._register = __register;
		}

		this.initialize();
	}

	_createClass(Modules, [{
		key: 'initialize',
		value: function initialize() {
			this.queryString = '[' + this.options.attrPrefix + '-' + this.options.attrName + ']';
			__register.modulesInContext = Veams.helpers.querySelectorArray(this.queryString);

			if (this.options.useMutationObserver) {
				this.observe(document.body);
			}

			this.bindEvents();
		}
	}, {
		key: 'bindEvents',
		value: function bindEvents() {
			var _this = this;

			if (!Veams.Vent && this.options.useMutationObserver === false) {
				console.info('VeamsModules :: In order to work with the the ajax handling in VeamsModulesHandler ' + 'you need to define "useMutationObserver" or use the VeamsVent plugin!');

				return;
			}

			if (Veams.Vent && this.options.useMutationObserver === false) {
				Veams.Vent.on(Veams.EVENTS.DOMchanged, function (e, context) {
					__register.modulesInContext = _this.getModulesInContext(context);

					if (_this.options.logs) {
						console.info('VeamsModules :: Recording new context. When available new modules will be initialised in: ', context);
					}

					_this.registerAll();
				});
			}
		}

		// ------------------------
		// STATIC CACHE HANDLER
		// ------------------------

		/**
   * Save the module in __cache.
   *
   * @param {Object} module - module metadata object (@see VeamsComponent.metaData())
   * @param {Object} element - module element (this.el)
   * @param {Object} instance - module instance
   * @param {String} namespace - module namespace
   */

	}, {
		key: 'bindConditions',
		value: function bindConditions() {
			var _this2 = this;

			__register.modulesOnConditions.forEach(function (module) {
				if (module.conditionsListenOn && module.conditionsListenOn.length) {
					_this2.bindCondition(module);
				}
			});
		}
	}, {
		key: 'bindCondition',
		value: function bindCondition(module) {
			var _this3 = this;

			var globalEvts = module.conditionsListenOn.join(' ');

			if (Veams.Vent) {
				Veams.Vent.subscribe(globalEvts, function () {
					_this3.registerConditionalModule(module);
				});
			}
		}

		// ------------------------
		// UN/REGISTER HANDLER
		// ------------------------

		/**
   * Split up modules depending on condition check
   */

	}, {
		key: 'splitUpModules',
		value: function splitUpModules() {
			var _this4 = this;

			__register.modulesInRegister.forEach(function (obj) {
				if (_this4.constructor.isCondition(obj)) {
					__register.modulesOnConditions.push(obj);
				} else {
					__register.modulesOnInit.push(obj);
				}
			});
		}

		/**
   * Register multiple modules.
   *
   * @param {Array} arr - Array which contains the modules as object.
   *
   * @public
   */

	}, {
		key: 'register',
		value: function register(arr) {
			if (!Array.isArray(arr)) {
				throw new Error('VeamsModules :: You need to pass an array to register()!');
			}

			__register.modulesInRegister = __register.modulesInRegister.concat(arr);

			this.splitUpModules();
			this.bindConditions();
			this.registerAll();
		}

		/**
   * Register all modules
   */

	}, {
		key: 'registerAll',
		value: function registerAll() {
			if (!__register.modulesInRegister) return;

			this.registerInitialModules();
			this.registerConditionalModules();
		}

		/**
   * Register all initial modules
   */

	}, {
		key: 'registerInitialModules',
		value: function registerInitialModules() {
			var _this5 = this;

			__register.modulesOnInit.forEach(function (obj) {
				_this5.registerOne(obj);
			});
		}

		/**
   * Register conditional modules
   *
   * Therefore we check the condition and
   * when true register the specific module
   * when false unregister the specific module
   */

	}, {
		key: 'registerConditionalModules',
		value: function registerConditionalModules() {
			var _this6 = this;

			__register.modulesOnConditions.forEach(function (obj) {
				_this6.registerConditionalModule(obj);
			});
		}
	}, {
		key: 'registerConditionalModule',
		value: function registerConditionalModule(obj) {
			if (this.constructor.makeConditionCheck(obj)) {
				this.registerOne(obj);
			} else {
				this.unregisterOne(obj);
			}
		}

		/**
   * Register one module and init the elements in the specific context
   *
   * @param {String} namespace - Required: element name in DOM
   * @param {String} domName - Required: element name in DOM
   * @param {Object} module - Required: class which will be used to render your module
   * @param {boolean} [render=true] - Optional: render the class, if false the class will only be initialized
   * @param {function} [cb] - Optional: provide a function which will be executed after initialisation
   * @param {Object} [options] - Optional: You can pass options to the module via JS (Useful for DOMChanged)
   *
   */

	}, {
		key: 'registerOne',
		value: function registerOne(_ref) {
			var namespace = _ref.namespace,
			    domName = _ref.domName,
			    module = _ref.module,
			    render = _ref.render,
			    cb = _ref.cb,
			    options = _ref.options;

			var nameSpace = namespace ? namespace : domName;

			if (!module) throw new Error('VeamsModules :: In order to work with register() you need to define a module!');
			if (!nameSpace) throw new Error('VeamsModules :: In order to work with register() you need to define a module!');

			this.initModules({
				namespace: nameSpace,
				module: module,
				render: render,
				cb: cb,
				options: options
			});
		}
	}, {
		key: 'unregisterOne',
		value: function unregisterOne(_ref2) {
			var namespace = _ref2.namespace;

			if (this.constructor.checkModuleInCache(namespace, 'namespace') === true) {
				this.constructor.removeFromCacheByKey(namespace, 'namespace');
			}
		}

		// ------------------------
		// INIT HANDLER
		// ------------------------

		/**
   * Initialize a module and render it and/or provide a callback function
   *
   * @param {string} namespace - Required: dom name of the element
   * @param {Object} module - Required: class which will be used to render your module
   * @param {boolean} [render=true] - Optional: render the class, if false the class will only be initialized
   * @param {Object} [options] - Optional: You can pass options to the module via JS (Useful for DOMChanged)
   * @param {function} [cb] - Optional: provide a function which will be executed after initialisation
   *
   */

	}, {
		key: 'initModules',
		value: function initModules(_ref3) {
			var _this7 = this;

			var namespace = _ref3.namespace,
			    module = _ref3.module,
			    render = _ref3.render,
			    options = _ref3.options,
			    cb = _ref3.cb;

			Veams.helpers.forEach(__register.modulesInContext, function (i, el) {
				_this7.initModule({
					el: el,
					namespace: namespace,
					options: options,
					module: module,
					render: render,
					cb: cb
				});
			});
		}
	}, {
		key: 'initModule',
		value: function initModule(_ref4) {
			var el = _ref4.el,
			    namespace = _ref4.namespace,
			    options = _ref4.options,
			    module = _ref4.module,
			    render = _ref4.render,
			    cb = _ref4.cb;

			var noRender = el.getAttribute(this.options.attrPrefix + '-no-render') || render === false || false;
			var dataModules = el.getAttribute(this.options.attrPrefix + '-' + this.options.attrName).split(' ');

			if (dataModules.indexOf(namespace) !== -1) {
				// Check init state
				if (this.constructor.checkModuleInCache(el, 'element', namespace) === true) {
					console.info('VeamsModules :: Element is already in cache and initialized: ');
					console.log(el);
					return;
				}

				// Go ahead when condition is true
				var attrs = el.getAttribute(this.options.attrPrefix + '-' + this.options.attrOptions);
				var mergedOptions = Veams.helpers.extend(JSON.parse(attrs), options || {});
				var Module = module;
				var instance = new Module({
					el: el,
					namespace: namespace,
					options: mergedOptions,
					appInstance: Veams
				});

				this.constructor.addToCache({
					element: el,
					module: module,
					instance: instance,
					namespace: namespace
				});

				// Mount process
				if (instance.willMount) instance.willMount();

				// Render after initial module loading
				if (!noRender) instance.render();

				// Provide callback function in which you can use module and options
				if (cb && typeof cb === 'function') cb(module, mergedOptions);

				// Mount process
				if (instance.didMount) instance.didMount();
			}
		}

		/**
   * Add mutation observer to observe new modules.
   *
   * @param {Object} context - Context for the mutation observer
   *
   * TODO: Improve for loops
   */

	}, {
		key: 'observe',
		value: function observe(context) {
			var _this8 = this;

			var observer = new MutationObserver(function (mutations) {
				// look through all mutations that just occured
				for (var i = 0; i < mutations.length; ++i) {
					// look through all added nodes of this mutation

					for (var j = 0; j < mutations[i].addedNodes.length; ++j) {
						var addedNode = mutations[i].addedNodes[j];

						if (addedNode instanceof HTMLElement) {
							if (addedNode.getAttribute(_this8.options.attrPrefix + '-' + _this8.options.attrName)) {
								var namespace = addedNode.getAttribute(_this8.options.attrPrefix + '-' + _this8.options.attrName);

								if (_this8.options.logs) {
									console.info('VeamsModules :: Recording a new module with the namespace ' + namespace + ' at: ', addedNode);
								}

								var _iteratorNormalCompletion = true;
								var _didIteratorError = false;
								var _iteratorError = undefined;

								try {
									for (var _iterator = __register.modulesInRegister[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
										var module = _step.value;

										if (module.namespace === namespace) {
											_this8.initModule({
												el: addedNode,
												module: module.module,
												namespace: module.namespace
											});

											break;
										}
									}
								} catch (err) {
									_didIteratorError = true;
									_iteratorError = err;
								} finally {
									try {
										if (!_iteratorNormalCompletion && _iterator.return) {
											_iterator.return();
										}
									} finally {
										if (_didIteratorError) {
											throw _iteratorError;
										}
									}
								}
							}

							if (_this8.getModulesInContext(addedNode).length) {
								__register.modulesInContext = _this8.getModulesInContext(addedNode);

								if (_this8.options.logs) {
									console.info('VeamsModules :: Recording new context. When available new modules will be initialised in: ', addedNode);
								}

								_this8.registerAll();

								__register.modulesInContext = _this8.getModulesInContext(document);
							}
						}
					}

					for (var _j = 0; _j < mutations[i].removedNodes.length; ++_j) {
						var removedNode = mutations[i].removedNodes[_j];

						if (removedNode instanceof HTMLElement) {
							if (removedNode.getAttribute(_this8.options.attrPrefix + '-' + _this8.options.attrName)) {

								if (_this8.options.logs) {
									console.info('VeamsModules :: Recording deletion of module: ', removedNode);
								}

								_this8.constructor.removeFromCacheByKey(removedNode);

								__register.modulesInContext = _this8.getModulesInContext(document);
							}

							if (_this8.getModulesInContext(removedNode).length) {
								__register.modulesInContext = _this8.getModulesInContext(removedNode);

								if (_this8.options.logs) {
									console.info('VeamsModules :: Recording deletion of DOM element. When available modules will be unbound in ', removedNode);
								}

								__register.modulesInContext.forEach(function (node) {
									_this8.constructor.removeFromCacheByKey(node);
								});

								__register.modulesInContext = _this8.getModulesInContext(document);
							}
						}
					}
				}
			});

			observer.observe(context, {
				childList: true,
				subtree: true
			});
		}

		/**
   * Get Modules in a specific context.
   *
   * @param {Object} context - Context for query specific string
   */

	}, {
		key: 'getModulesInContext',
		value: function getModulesInContext(context) {
			return Veams.helpers.querySelectorArray(this.queryString, context);
		}
	}], [{
		key: 'addToCache',
		value: function addToCache(_ref5) {
			var module = _ref5.module,
			    element = _ref5.element,
			    instance = _ref5.instance,
			    namespace = _ref5.namespace;

			__cache.push({
				module: module,
				element: element,
				instance: instance,
				namespace: namespace
			});

			if (Veams.Vent && Veams.EVENTS.moduleCached) {
				Veams.Vent.trigger(Veams.EVENTS.moduleCached, {
					module: module,
					element: element
				});
			}
		}
	}, {
		key: 'removeFromCacheByKey',
		value: function removeFromCacheByKey(obj) {
			var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'element';

			var deleteIndex = void 0;

			for (var i = 0; i < __cache.length; i++) {
				var cacheItem = __cache[i];

				if (cacheItem[key] === obj) {
					if (cacheItem.instance.willUnmount) cacheItem.instance.willUnmount();
					if (cacheItem.instance.unregisterEvents) cacheItem.instance.unregisterEvents();
					if (cacheItem.instance.didUnmount) cacheItem.instance.didUnmount();

					deleteIndex = i;
				}
			}

			if (deleteIndex) __cache.splice(deleteIndex, 1);
		}
	}, {
		key: 'checkModuleInCache',
		value: function checkModuleInCache(obj) {
			var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'element';
			var namespace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

			var state = false;

			for (var i = 0; i < __cache.length; i++) {
				var cacheItem = __cache[i];

				state = namespace !== undefined ? cacheItem[key] === obj && cacheItem.namespace === namespace : cacheItem[key] === obj;

				if (state) break;
			}

			return state;
		}

		// ------------------------
		// CONDITIONS HANDLER
		// ------------------------

	}, {
		key: 'isCondition',
		value: function isCondition(_ref6) {
			var conditions = _ref6.conditions;

			return conditions && typeof conditions === 'function';
		}
	}, {
		key: 'makeConditionCheck',
		value: function makeConditionCheck(_ref7) {
			var conditions = _ref7.conditions;

			if (conditions && typeof conditions === 'function') {
				return conditions();
			}
		}
	}]);

	return Modules;
}();

/**
 * Plugin object
 */


var VeamsModules = {
	options: {
		DEBUG: false,
		attrPrefix: 'data-js',
		attrName: 'module',
		attrOptions: 'options',
		logs: false,
		internalCacheOnly: true,
		internalRegisterOnly: false,
		useMutationObserver: false
	},
	pluginName: 'ModulesHandler',
	initialize: function initialize(Veams, opts) {
		this.options = Veams.helpers.extend(this.options, opts || {});
		Veams.modules = Veams.modules || new Modules(Veams, this.options);
	}
};

exports.default = VeamsModules;
exports.Modules = Modules;

},{}],6:[function(require,module,exports){
'use strict';

/**
 * Represents a Vent plugin which creates an empty object.
 * The object will be used as publish/subscribe plugin.
 *
 * The module extends the default EVENTS object of Veams
 * when you pass the option called 'furtherEvents'.
 *
 * @module VeamsVent
 *
 * @author Sebastian Fitzner
 */

/**
 * @module EventsHandler
 *
 * Pub/Sub system for Loosely Coupled logic.
 * Based on Peter Higgins' port from Dojo to jQuery
 * https://github.com/phiggins42/bloody-jquery-plugins/blob/master/pubsub.js
 * adopted https://github.com/phiggins42/bloody-jquery-plugins/blob/55e41df9bf08f42378bb08b93efcb28555b61aeb/pubsub.js
 *
 * modified by Sebastian Fitzner
 *
 */

Object.defineProperty(exports, "__esModule", {
	value: true
});
var EventsHandler = function () {
	var cache = {},

	/**
  *    Events.publish
  *    e.g.: Events.publish("/Article/added", {article: article}, this);
  *
  *    @class Events
  *    @method publish
  *    @param topic {String}
  *    @param args    {Object}
  *    @param scope {Object} Optional
  */
	publish = function publish(topic, args, scope) {
		if (cache[topic]) {
			var thisTopic = cache[topic];
			var i = thisTopic.length - 1;

			for (i; i >= 0; i -= 1) {
				thisTopic[i].call(scope || this, args || {});
			}
		}
	},

	/**
  *    Events.subscribe
  *    e.g.: Events.subscribe("/Article/added", Articles.validate)
  *
  *    @class Events
  *    @method subscribe
  *    @param topic {String}
  *    @param callback {Function}
  *    @return Event handler {Array}
  */
	subscribe = function subscribe(topic, callback) {
		var topics = topic.split(' ');

		for (var i = 0; i < topics.length; i++) {
			var _topic = topics[i];

			if (!cache[_topic]) {
				cache[_topic] = [];
			}

			cache[_topic].push(callback);
		}
	},


	/**
  *    Events.unsubscribe
  *    e.g.: var handle = Events.subscribe("/Article/added", Articles.validate);
  *        Events.unsubscribe("/Article/added", Articles.validate);
  *
  *    @class Events
  *    @method unsubscribe
  *    @param topic {String}
  *    @param handle {Function}
  *    @param completly {Boolean}
  */
	unsubscribe = function unsubscribe(topic, handle) {
		var completly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

		var i = cache[topic].length - 1;

		if (cache[topic]) {
			for (i; i >= 0; i--) {
				if (cache[topic][i] === handle) {
					cache[topic].splice(i, 1);
					if (completly) {
						delete cache[topic];
					}
				}
			}
		}
	};

	return {
		publish: publish,
		subscribe: subscribe,
		unsubscribe: unsubscribe,
		trigger: publish,
		on: subscribe,
		off: unsubscribe
	};
}();

var VeamsVent = {
	options: {
		furtherEvents: {}
	},
	pluginName: 'Vent',
	initialize: function initialize(Veams, opts) {

		if (!Veams.$) {
			console.error('VeamsVent :: You need to add a DOM handler plugin if you want to use Veams.Vent!');
			return;
		}

		if (opts) {
			this.options = Veams.helpers.extend(this.options, opts || {});
		}

		Veams.Vent = EventsHandler;
		Veams.EVENTS = Veams.helpers.extend(Veams.EVENTS, this.options.furtherEvents);
	}
};

exports.default = VeamsVent;
module.exports = exports['default'];

},{}],7:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});/**
 * Const for events (pub/sub)
 *
 * @author: Sebastian Fitzner
 *//**
 * Events Global
 */var EVENTS={};// @INSERTPOINT :: @ref: js-events
exports.default=EVENTS;

},{}],8:[function(require,module,exports){
'use strict';var _app=require('./app');console.log('JS initialized in version:',_app.App.version);// Global dependencies
console.log('Veams initialized in version:',_app.Veams.base.version);// Imports
// @INSERTPOINT :: @ref: js-self-contained-import, @keep: true //
// Initialize modules with Veams
_app.Veams.modules.register([// @INSERTPOINT :: @ref: js-init-v5, @keep: true //
]);// @INSERTPOINT :: @ref: js-init-once-v5, @keep: true //

},{"./app":"app"}],"app":[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.Veams=exports.App=undefined;var _veamsQuery=require('veams-query');var _veamsQuery2=_interopRequireDefault(_veamsQuery);var _veams=require('veams');var _veams2=_interopRequireDefault(_veams);var _logger=require('veams/src/js/plugins/logger');var _logger2=_interopRequireDefault(_logger);var _dom=require('veams/src/js/plugins/dom');var _dom2=_interopRequireDefault(_dom);var _vent=require('veams/src/js/plugins/vent');var _vent2=_interopRequireDefault(_vent);var _modules=require('veams/src/js/plugins/modules');var _modules2=_interopRequireDefault(_modules);var _mediaQueryHandler=require('veams/src/js/plugins/media-query-handler');var _mediaQueryHandler2=_interopRequireDefault(_mediaQueryHandler);var _events=require('./events');var _events2=_interopRequireDefault(_events);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// Global dependencies 
var App={};App.$=_veamsQuery2.default;// Versioning
App.version="0.0.1";// Veams
_veams2.default.onInitialize(function(){/**
	* Veams Plugins
	*/// Dom Plugin
_veams2.default.use(_dom2.default,{DOM:_veamsQuery2.default});// Vent Plugin
_veams2.default.use(_vent2.default,{furtherEvents:_events2.default});// Logger Plugin for devmode and logger
_veams2.default.use(_logger2.default);// Module System Plugin
_veams2.default.use(_modules2.default,{useMutationObserver:true,internalCacheOnly:false});// Media Query Handler Plugin
_veams2.default.use(_mediaQueryHandler2.default);var mobileButtonSel="[data-js-item='mobile-button']";// this is a string to select
var $mobileButton=(0,_veamsQuery2.default)(mobileButtonSel);// this is a Jquery element, hence the $ at the beginning
var headerMenuList="[data-js-item='header-nav-list']";var $menuList=(0,_veamsQuery2.default)(headerMenuList);var openClass="is-open";$mobileButton.on("click",function(e,target){var $target=(0,_veamsQuery2.default)(target);// cache element that youll need later
if($target.hasClass(openClass)){$target.removeClass(openClass);$menuList.removeClass(openClass);}else{$target.addClass(openClass);$menuList.addClass(openClass);}});});exports.App=App;exports.Veams=_veams2.default;

},{"./events":7,"veams":1,"veams-query":"veams-query","veams/src/js/plugins/dom":2,"veams/src/js/plugins/logger":3,"veams/src/js/plugins/media-query-handler":4,"veams/src/js/plugins/modules":5,"veams/src/js/plugins/vent":6}]},{},[8])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvdmVhbXMvbGliL3ZlYW1zLmpzIiwibm9kZV9tb2R1bGVzL3ZlYW1zL3NyYy9qcy9wbHVnaW5zL2RvbS5qcyIsIm5vZGVfbW9kdWxlcy92ZWFtcy9zcmMvanMvcGx1Z2lucy9sb2dnZXIuanMiLCJub2RlX21vZHVsZXMvdmVhbXMvc3JjL2pzL3BsdWdpbnMvbWVkaWEtcXVlcnktaGFuZGxlci5qcyIsIm5vZGVfbW9kdWxlcy92ZWFtcy9zcmMvanMvcGx1Z2lucy9tb2R1bGVzLmpzIiwibm9kZV9tb2R1bGVzL3ZlYW1zL3NyYy9qcy9wbHVnaW5zL3ZlbnQuanMiLCJyZXNvdXJjZXMvanMvZXZlbnRzLmpzIiwicmVzb3VyY2VzL2pzL21haW4uanMiLCJyZXNvdXJjZXMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0FBLENBQUMsU0FBUyxnQ0FBVCxDQUEwQyxJQUExQyxFQUFnRCxPQUFoRCxFQUF5RDtBQUN6RCxLQUFHLFFBQU8sT0FBUCwwQ0FBTyxPQUFQLE9BQW1CLFFBQW5CLElBQStCLFFBQU8sTUFBUCwwQ0FBTyxNQUFQLE9BQWtCLFFBQXBELEVBQ0MsT0FBTyxPQUFQLEdBQWlCLFNBQWpCLENBREQsS0FFSyxJQUFHLE9BQU8sTUFBUCxLQUFrQixVQUFsQixJQUFnQyxPQUFPLEdBQTFDLEVBQ0osT0FBTyxPQUFQLEVBQWdCLEVBQWhCLEVBQW9CLE9BQXBCLEVBREksS0FFQSxJQUFHLFFBQU8sT0FBUCwwQ0FBTyxPQUFQLE9BQW1CLFFBQXRCLEVBQ0osUUFBUSxPQUFSLElBQW1CLFNBQW5CLENBREksS0FHSixLQUFLLE9BQUwsSUFBZ0IsS0FBSyxPQUFMLEtBQWlCLEVBQWpDLEVBQXFDLEtBQUssT0FBTCxFQUFjLE9BQWQsSUFBeUIsU0FBOUQ7QUFDRCxDQVRELGFBU1MsWUFBVztBQUNwQixRQUFPLFNBQVUsVUFBUyxPQUFU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LENBQWUsQ0FDeEMsR0FBTSxTQUFVLHlCQUFFLE1BQUYsQ0FBaEIsQ0FBMkI7QUFFOUIsR0FBSSxRQUFRLFFBQVIsQ0FBaUIsU0FBakIsQ0FBSixDQUFpQyxDQUN2QixRQUFRLFdBQVIsQ0FBb0IsU0FBcEIsRUFDQSxVQUFVLFdBQVYsQ0FBc0IsU0FBdEIsRUFDVCxDQUhELElBR08sQ0FDRyxRQUFRLFFBQVIsQ0FBaUIsU0FBakIsRUFDQSxVQUFVLFFBQVYsQ0FBbUIsU0FBbkIsRUFDVCxDQUNFLENBVkQsRUFZSCxDQTdDRCxFLFFBK0NRLEcsQ0FBQSxHLFNBQUssSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInZlYW1zXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInZlYW1zXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInZlYW1zXCJdID0gcm9vdFtcInZlYW1zXCJdIHx8IHt9LCByb290W1widmVhbXNcIl1bXCJ2ZWFtc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0LyoqXG5cdCAqIEltcG9ydHNcblx0ICovXG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfc3RhcnRlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXHRcblx0dmFyIF9zdGFydGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXJ0ZXIpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblx0XG5cdC8qKlxuXHQgKiBWYXJpYWJsZXNcblx0ICovXG5cblx0ZXhwb3J0cy5kZWZhdWx0ID0gX3N0YXJ0ZXIyLmRlZmF1bHQ7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMSAqLyxcbi8qIDIgKi8sXG4vKiAzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0XHR2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0ZXhwb3J0cy5kZWZhdWx0ID0gbWl4aW47XG5cdFxuXHR2YXIgX2RlZmF1bHRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblx0XG5cdHZhciBfZGVmYXVsdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdHMpO1xuXHRcblx0dmFyIF9tZXRob2RFeHRlbmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXHRcblx0dmFyIF9tZXRob2RFeHRlbmQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWV0aG9kRXh0ZW5kKTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cdFxuXHQvKipcblx0ICogTWVyZ2UgbWV0aG9kIGZ1bmN0aW9ucy5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGZyb20gLSBNaXhpbiBvYmplY3Qgd2hpY2ggd2lsbCBiZSBtZXJnZWQgdmlhIEhlbHBlcnMuZGVmYXVsdHMgd2l0aCB0aGUgbWV0aG9kcyBvZiBvdXIgY2xhc3Ncblx0ICogQHBhcmFtIHtBcnJheX0gbWV0aG9kcyAtIEFycmF5IG9mIG1ldGhvZCBuYW1lcyB3aGljaCB3aWxsIGJlIGV4dGVuZGVkLlxuXHQgKi9cblx0ZnVuY3Rpb24gbWl4aW4oZnJvbSkge1xuXHRcdHZhciBtZXRob2RzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBbJ2luaXRpYWxpemUnLCAncmVuZGVyJ107XG5cdFxuXHRcdGlmIChmcm9tID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1ZlYW1zSGVscGVycyA6IE1peGluIDo6IE1peGluIG5vdCBmb3VuZCEnKTtcblx0XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcblx0XHR2YXIgdG8gPSB0aGlzLnByb3RvdHlwZTtcblx0XG5cdFx0LyoqIEFkZCB0aG9zZSBtZXRob2RzIHdoaWNoIGV4aXN0cyBvbiBgZnJvbWAgYnV0IG5vdCBvbiBgdG9gIHRvIHRoZSBsYXR0ZXIgKi9cblx0XHQoMCwgX2RlZmF1bHRzMi5kZWZhdWx0KSh0bywgZnJvbSk7XG5cdFxuXHRcdC8qKiB3ZSBkbyB0aGUgc2FtZSBmb3IgZXZlbnRzICovXG5cdFx0aWYgKHRvLmV2ZW50cykge1xuXHRcdFx0KDAsIF9kZWZhdWx0czIuZGVmYXVsdCkodG8uZXZlbnRzLCBmcm9tLmV2ZW50cyk7XG5cdFx0fVxuXHRcblx0XHQvLyBFeHRlbmQgdG8ncyBtZXRob2RzXG5cdFx0bWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcblx0XHRcdCgwLCBfbWV0aG9kRXh0ZW5kMi5kZWZhdWx0KSh0bywgZnJvbSwgbWV0aG9kKTtcblx0XHR9KTtcblx0fTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcblx0ICogU2ltcGxlIGV4dGVuZCBtZXRob2QsIHdoaWNoIGV4dGVuZHMgYW4gb2JqZWN0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gb2JqZWN0IHdoaWNoIHdpbGwgYmUgZXh0ZW5kZWRcblx0ICpcblx0ICogQHJldHVybiB7T2JqZWN0fSBvYmogLSBleHRlbmRlZCBvYmplY3Rcblx0ICovXG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0ZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdHNIZWxwZXI7XG5cdGZ1bmN0aW9uIGRlZmF1bHRzSGVscGVyKG9iaikge1xuXHQgIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG5cdCAgICBmb3IgKHZhciBrZXkgaW4gaXRlbSkge1xuXHQgICAgICBpZiAob2JqW2tleV0gPT09IHVuZGVmaW5lZCkgb2JqW2tleV0gPSBpdGVtW2tleV07XG5cdCAgICB9XG5cdCAgfSk7XG5cdCAgcmV0dXJuIG9iajtcblx0fTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcblx0ICogSGVscGVyIG1ldGhvZCB0byBleHRlbmQgYW4gYWxyZWFkeSBleGlzdGluZyBtZXRob2QuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB0byAtIHZpZXcgd2hpY2ggd2lsbCBiZSBleHRlbmRlZFxuXHQgKiBAcGFyYW0ge09iamVjdH0gZnJvbSAtIG1ldGhvZHMgd2hpY2ggY29tZXMgZnJvbSBtaXhpblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZSAtIGZ1bmN0aW9uIG5hbWVcblx0ICovXG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0XHR2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0ZXhwb3J0cy5kZWZhdWx0ID0gbWV0aG9kRXh0ZW5kO1xuXHRmdW5jdGlvbiBtZXRob2RFeHRlbmQodG8sIGZyb20sIG1ldGhvZE5hbWUpIHtcblx0XHRmdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG5cdFx0fVxuXHRcblx0XHRpZiAoZnJvbSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cdFxuXHRcdC8vIGlmIHRoZSBtZXRob2QgaXMgZGVmaW5lZCBvbiBmcm9tIC4uLlxuXHRcdGlmICghaXNVbmRlZmluZWQoZnJvbVttZXRob2ROYW1lXSkpIHtcblx0XHRcdHZhciBvbGQgPSB0b1ttZXRob2ROYW1lXTtcblx0XG5cdFx0XHQvLyAuLi4gd2UgY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9uIHRvXG5cdFx0XHR0b1ttZXRob2ROYW1lXSA9IGZ1bmN0aW9uICgpIHtcblx0XG5cdFx0XHRcdC8vIHdoZXJlaW4gd2UgZmlyc3QgY2FsbCB0aGUgbWV0aG9kIHdoaWNoIGV4aXN0cyBvbiBgdG9gXG5cdFx0XHRcdHZhciBvbGRSZXR1cm4gPSBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XG5cdFx0XHRcdC8vIGFuZCB0aGVuIGNhbGwgdGhlIG1ldGhvZCBvbiBgZnJvbWBcblx0XHRcdFx0ZnJvbVttZXRob2ROYW1lXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcblx0XHRcdFx0Ly8gYW5kIHRoZW4gcmV0dXJuIHRoZSBleHBlY3RlZCByZXN1bHQsXG5cdFx0XHRcdC8vIGkuZS4gd2hhdCB0aGUgbWV0aG9kIG9uIGB0b2AgcmV0dXJuc1xuXHRcdFx0XHRyZXR1cm4gb2xkUmV0dXJuO1xuXHRcdFx0fTtcblx0XHR9XG5cdH07XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0LyoqXG5cdCAqIFNpbXBsZSBleHRlbmQgbWV0aG9kIHRvIGV4dGVuZCB0aGUgcHJvcGVydGllcyBvZiBhbiBvYmplY3QuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBvYmplY3Qgd2hpY2ggd2lsbCBiZSBleHRlbmRlZFxuXHQgKlxuXHQgKiBAcmV0dXJuIHtPYmplY3R9IG9iaiAtIGV4dGVuZGVkIG9iamVjdFxuXHQgKi9cblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzLmRlZmF1bHQgPSBleHRlbmQ7XG5cdGZ1bmN0aW9uIGV4dGVuZChvYmopIHtcblx0ICBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuXHQgICAgZm9yICh2YXIga2V5IGluIGl0ZW0pIHtcblx0ICAgICAgb2JqW2tleV0gPSBpdGVtW2tleV07XG5cdCAgICB9XG5cdCAgfSk7XG5cdCAgcmV0dXJuIG9iajtcblx0fTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcblx0ICogR2VuZXJhdGVzIG51bWVyaWMgaWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc2VnbWVudHM9MV0gLSBudW1iZXIgb2Ygc2VnbWVudHMgb2YgZ2VuZXJhdGVkIGlkIChzZWdtZW50cyBjb25zaXN0IG9mIDEwIGRpZ2l0cywgc2VwYXJhdGVkIGJ5ICctJykuXG5cdCAqXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gLSBnZW5lcmF0ZWQgaWRcblx0ICovXG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0XHR2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0ZXhwb3J0cy5kZWZhdWx0ID0gbWFrZUlkO1xuXHRmdW5jdGlvbiBtYWtlSWQoKSB7XG5cdFx0dmFyIHNlZ21lbnRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAxO1xuXHRcblx0XHR2YXIgY3J5cHRvID0gd2luZG93LmNyeXB0byB8fCB3aW5kb3cubXNDcnlwdG87XG5cdFx0dmFyIGFycmF5ID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDMyQXJyYXkoc2VnbWVudHMpKTtcblx0XHR2YXIgaWQgPSAnJztcblx0XHR2YXIgaSA9IDA7XG5cdFxuXHRcdGZvciAoOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlkICs9IGFycmF5W2ldICsgJy0nO1xuXHRcdH1cblx0XG5cdFx0cmV0dXJuIGlkLnNsaWNlKDAsIC0xKTtcblx0fTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA4ICovLFxuLyogOSAqLyxcbi8qIDEwICovLFxuLyogMTEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdC8qKlxuXHQgKiBQb2x5ZmlsbHNcblx0ICovXG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0XHR2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuXHRcblx0dmFyIF9jb3JlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG5cdFxuXHR2YXIgX2NvcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29yZSk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0dmFyIFZlYW1zID0ge307XG5cdFxuXHQvKipcblx0ICogSW1wb3J0c1xuXHQgKi9cblx0XG5cdFxuXHQoZnVuY3Rpb24gKHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXHRcdCd1c2Ugc3RyaWN0Jztcblx0XG5cdFx0VmVhbXMgPSBuZXcgX2NvcmUyLmRlZmF1bHQoe1xuXHRcdFx0bmFtZXNwYWNlOiAnVmVhbXMnLFxuXHRcdFx0YWRkVG9HbG9iYWw6IHRydWVcblx0XHR9KTtcblx0XG5cdFx0VmVhbXMuaW5pdGlhbGl6ZSgpO1xuXHR9KSh3aW5kb3csIGRvY3VtZW50KTtcblx0XG5cdGV4cG9ydHMuZGVmYXVsdCA9IFZlYW1zO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDEyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvLyBQb2x5ZmlsbCBmb3IgY3VzdG9tIGV2ZW50c1xuXHQoZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XG5cdFxuXHRcdGZ1bmN0aW9uIEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMpIHtcblx0XHRcdHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcblx0XG5cdFx0XHRwYXJhbXMgPSBwYXJhbXMgfHwgeyBidWJibGVzOiBmYWxzZSwgY2FuY2VsYWJsZTogZmFsc2UsIGRldGFpbDogdW5kZWZpbmVkIH07XG5cdFxuXHRcdFx0ZXZ0LmluaXRDdXN0b21FdmVudChldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsKTtcblx0XHRcdHJldHVybiBldnQ7XG5cdFx0fVxuXHRcblx0XHRDdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlO1xuXHRcblx0XHR3aW5kb3cuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudDtcblx0fSkoKTtcblxuLyoqKi8gfSxcbi8qIDEzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0XHR2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7IC8qKlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogUmVwcmVzZW50cyBWZWFtc0NvcmUuXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAbW9kdWxlIFZlYW1zQ29yZVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBhdXRob3IgU2ViYXN0aWFuIEZpdHpuZXJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXHRcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuXHRcblx0dmFyIF91c2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcblx0XG5cdHZhciBfdXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VzZSk7XG5cdFxuXHR2YXIgX2V2ZW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xuXHRcblx0dmFyIF9ldmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXZlbnRzKTtcblx0XG5cdHZhciBfaGVscGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xuXHRcblx0dmFyIF9oZWxwZXJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnMpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cdFxuXHR2YXIgaW5pdFN0YXRlID0gZmFsc2U7XG5cdFxuXHR2YXIgVmVhbXNDb3JlID0gZnVuY3Rpb24gKCkge1xuXHRcdGZ1bmN0aW9uIFZlYW1zQ29yZShvcHRzKSB7XG5cdFx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmVhbXNDb3JlKTtcblx0XG5cdFx0XHR0aGlzLl9vcHRpb25zID0ge1xuXHRcdFx0XHRuYW1lc3BhY2U6ICdWZWFtcycsXG5cdFx0XHRcdGFkZFRvR2xvYmFsOiBmYWxzZVxuXHRcdFx0fTtcblx0XG5cdFx0XHR0aGlzLmJhc2UgPSB7XG5cdFx0XHRcdG5hbWU6ICdWZWFtcycsXG5cdFx0XHRcdHZlcnNpb246ICc1LjAuMC1yYzE5J1xuXHRcdFx0fTtcblx0XG5cdFx0XHR0aGlzLnVzZSA9IF91c2UyLmRlZmF1bHQuYmluZCh0aGlzKTtcblx0XHRcdHRoaXMuUGx1Z2lucyA9IHt9O1xuXHRcdFx0dGhpcy5FVkVOVFMgPSBfZXZlbnRzMi5kZWZhdWx0O1xuXHRcdFx0dGhpcy5oZWxwZXJzID0ge307XG5cdFx0XHR0aGlzLmRldGVjdGlvbnMgPSB7XG5cdFx0XHRcdHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcblx0XHRcdFx0aGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcblx0XHRcdH07XG5cdFxuXHRcdFx0aW5pdFN0YXRlID0gZmFsc2U7XG5cdFxuXHRcdFx0dGhpcy5zZXR1cChvcHRzKTtcblx0XHR9XG5cdFxuXHRcdF9jcmVhdGVDbGFzcyhWZWFtc0NvcmUsIFt7XG5cdFx0XHRrZXk6ICdzZXR1cCcsXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gc2V0dXAob3B0cykge1xuXHRcdFx0XHR0aGlzLnVzZShfaGVscGVyczIuZGVmYXVsdCk7XG5cdFxuXHRcdFx0XHR0aGlzLmRldGVjdGlvbnMgPSB0aGlzLmhlbHBlcnMuZXh0ZW5kKHtcblx0XHRcdFx0XHR0b3VjaDogdGhpcy5oZWxwZXJzLmlzVG91Y2goKVxuXHRcdFx0XHR9LCB0aGlzLmRldGVjdGlvbnMpO1xuXHRcblx0XHRcdFx0dGhpcy5vcHRpb25zID0gb3B0cztcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRrZXk6ICdpbml0aWFsaXplJyxcblx0XHRcdHZhbHVlOiBmdW5jdGlvbiBpbml0aWFsaXplKG9wdHMpIHtcblx0XHRcdFx0aWYgKGluaXRTdGF0ZSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHJldHVybiBjb25zb2xlLmluZm8oJ1ZlYW1zIDo6IFlvdSBhbHJlYWR5IGluaXRpYWxpemVkIFZlYW1zIScpO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHQvKipcblx0ICAgICogU2V0IGdsb2JhbCBvcHRpb25zIG9uIGluaXRpYWxpemVcblx0ICAgICovXG5cdFx0XHRcdHRoaXMub3B0aW9ucyA9IG9wdHM7XG5cdFxuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLmFkZFRvR2xvYmFsKSB7XG5cdFx0XHRcdFx0aWYgKHdpbmRvdyAmJiAhd2luZG93W3RoaXMub3B0aW9ucy5uYW1lc3BhY2VdKSB7XG5cdFx0XHRcdFx0XHR3aW5kb3dbdGhpcy5vcHRpb25zLm5hbWVzcGFjZV0gPSB0aGlzIHx8IHt9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0aW5pdFN0YXRlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRrZXk6ICdvbkluaXRpYWxpemUnLFxuXHRcdFx0dmFsdWU6IGZ1bmN0aW9uIG9uSW5pdGlhbGl6ZShjYikge1xuXHRcdFx0XHRpZiAoIWNiIHx8IHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdWZWFtcyA6OiBDYWxsYmFjayBpcyBub3QgYSBmdW5jdGlvbiEnKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XG5cdFx0XHRcdGlmIChpbml0U3RhdGUgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0dGhpcy5pbml0aWFsaXplKCk7XG5cdFx0XHRcdH1cblx0XG5cdFx0XHRcdGNiKCk7XG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0a2V5OiAnb25ET01SZWFkeScsXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gb25ET01SZWFkeShjYikge1xuXHRcdFx0XHRpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1ZlYW1zIDo6IENhbGxiYWNrIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2IpO1xuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGtleTogJ3ZlcnNpb24nLFxuXHRcdFx0c2V0OiBmdW5jdGlvbiBzZXQodmVyc2lvbikge1xuXHRcdFx0XHR0aGlzLl92ZXJzaW9uID0gdmVyc2lvbjtcblx0XHRcdH0sXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3ZlcnNpb247XG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0a2V5OiAnaW5pdGlhbGl6ZWQnLFxuXHRcdFx0c2V0OiBmdW5jdGlvbiBzZXQoYm9vbCkge1xuXHRcdFx0XHR0aGlzLl9pbml0aWFsaXplZCA9IGJvb2w7XG5cdFx0XHR9LFxuXHRcdFx0Z2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9pbml0aWFsaXplZDtcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRrZXk6ICdvcHRpb25zJyxcblx0XHRcdHNldDogZnVuY3Rpb24gc2V0KG9wdGlvbnMpIHtcblx0XHRcdFx0dGhpcy5fb3B0aW9ucyA9IHRoaXMuaGVscGVycy5leHRlbmQodGhpcy5vcHRpb25zLCBvcHRpb25zIHx8IHt9KTtcblx0XHRcdH0sXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX29wdGlvbnM7XG5cdFx0XHR9XG5cdFx0fV0pO1xuXHRcblx0XHRyZXR1cm4gVmVhbXNDb3JlO1xuXHR9KCk7XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBWZWFtc0NvcmU7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdC8qKlxuXHQgKiBSZXByZXNlbnRzIGEgc2ltcGxlIHBsdWdpbiBzeXN0ZW0gaW4gd2hpY2ggYHRoaXNgIGlzIFZlYW1zLlxuXHQgKiBAbW9kdWxlIHBsdWdpblxuXHQgKlxuXHQgKiBAYXV0aG9yIFNlYmFzdGlhbiBGaXR6bmVyXG5cdCAqL1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocGx1Z2luKSB7XG5cdCAgaWYgKHBsdWdpbi5wbHVnaW5OYW1lKSB7XG5cdCAgICB0aGlzLlBsdWdpbnNbcGx1Z2luLnBsdWdpbk5hbWVdID0gcGx1Z2luO1xuXHQgIH1cblx0XG5cdCAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG5cdCAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcblx0ICB9XG5cdFxuXHQgIHBsdWdpbi5pbml0aWFsaXplLmFwcGx5KHBsdWdpbiwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cdH07XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDE1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcblx0ICogQ29uc3QgZm9yIGV2ZW50cyAocHViL3N1Yilcblx0ICpcblx0ICogQGF1dGhvcjogU2ViYXN0aWFuIEZpdHpuZXJcblx0ICovXG5cdFxuXHQvKipcblx0ICogRXZlbnRzIEdsb2JhbFxuXHQgKi9cblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHRcdHZhbHVlOiB0cnVlXG5cdH0pO1xuXHR2YXIgRVZFTlRTID0ge1xuXHRcdGJsdXI6ICdibHVyJyxcblx0XHRjaGFuZ2U6ICdjaGFuZ2UnLFxuXHRcdGNsaWNrOiAnY2xpY2snLFxuXHRcdGRibGNsaWNrOiAnZGJsY2xpY2snLFxuXHRcdERPTWNoYW5nZWQ6ICdkb206Y2hhbmdlZCcsXG5cdFx0RE9NcmVkaXJlY3Q6ICdkb206cmVkaXJlY3QnLFxuXHRcdGhhc2hjaGFuZ2U6ICdoYXNoY2hhbmdlJyxcblx0XHRpbnB1dDogJ2lucHV0Jyxcblx0XHRrZXlkb3duOiAna2V5ZG93bicsXG5cdFx0a2V5cHJlc3M6ICdrZXlwcmVzcycsXG5cdFx0a2V5dXA6ICdrZXl1cCcsXG5cdFx0bWVkaWFjaGFuZ2U6ICdtZWRpYWNoYW5nZScsXG5cdFx0bW9kdWxlQ2FjaGVkOiAnbW9kdWxlOmNhY2hlZCcsXG5cdFx0bW91c2Vkb3duOiAnbW91c2Vkb3duJyxcblx0XHRtb3VzZWVudGVyOiAnbW91c2VlbnRlcicsXG5cdFx0bW91c2VsZWF2ZTogJ21vdXNlbGVhdmUnLFxuXHRcdG1vdXNlb3V0OiAnbW91c2VvdXQnLFxuXHRcdG1vdXNlb3ZlcjogJ21vdXNlb3ZlcicsXG5cdFx0bW91c2V1cDogJ21vdXNldXAnLFxuXHRcdHJlc2V0OiAncmVzZXQnLFxuXHRcdHJlc2l6ZTogJ3Jlc2l6ZScsXG5cdFx0c2Nyb2xsOiAnc2Nyb2xsJyxcblx0XHRzdWJtaXQ6ICdzdWJtaXQnLFxuXHRcdHN3aXBlOiAnc3dpcGUnXG5cdH07XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBFVkVOVFM7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHRcdHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0dmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXHRcblx0dmFyIF9leHRlbmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXHRcblx0dmFyIF9leHRlbmQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kKTtcblx0XG5cdHZhciBfbWl4aW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXHRcblx0dmFyIF9taXhpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9taXhpbik7XG5cdFxuXHR2YXIgX21ldGhvZEV4dGVuZCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdFxuXHR2YXIgX21ldGhvZEV4dGVuZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZXRob2RFeHRlbmQpO1xuXHRcblx0dmFyIF9pc1RvdWNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG5cdFxuXHR2YXIgX2lzVG91Y2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNUb3VjaCk7XG5cdFxuXHR2YXIgX3Rocm90dGxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCk7XG5cdFxuXHR2YXIgX3Rocm90dGxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Rocm90dGxlKTtcblx0XG5cdHZhciBfcXVlcnlTZWxlY3RvckFycmF5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSk7XG5cdFxuXHR2YXIgX3F1ZXJ5U2VsZWN0b3JBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9xdWVyeVNlbGVjdG9yQXJyYXkpO1xuXHRcblx0dmFyIF9mb3JFYWNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMCk7XG5cdFxuXHR2YXIgX2ZvckVhY2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZm9yRWFjaCk7XG5cdFxuXHR2YXIgX21ha2VJZCA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cdFxuXHR2YXIgX21ha2VJZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYWtlSWQpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblx0XG5cdHZhciBWZWFtc0hlbHBlcnMgPSB7XG5cdFx0cGx1Z2luTmFtZTogJ0hlbHBlcnMnLFxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uIGluaXRpYWxpemUoVmVhbXMpIHtcblx0XHRcdFZlYW1zLmFkZEhlbHBlciA9IGZ1bmN0aW9uIGFkZEhlbHBlcigpIHtcblx0XHRcdFx0Zm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0XHRcdFx0XHRhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHR2YXIgcGFyYW1zID0gW10uY29uY2F0KGFyZ3MpO1xuXHRcblx0XHRcdFx0aWYgKHBhcmFtcy5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRpZiAoX3R5cGVvZihwYXJhbXNbMF0pICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignVmVhbXNIZWxwZXJzIDo6IFlvdSBuZWVkIHRvIHBhc3MgYW4gb2JqZWN0IScpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XG5cdFx0XHRcdFx0Zm9yICh2YXIga2V5IGluIHBhcmFtc1swXSkge1xuXHRcdFx0XHRcdFx0aWYgKHBhcmFtc1swXS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0XHRcdGlmICghVmVhbXMuaGVscGVyc1trZXldKSB7XG5cdFx0XHRcdFx0XHRcdFx0VmVhbXMuaGVscGVyc1trZXldID0gcGFyYW1zWzBdW2tleV07XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5pbmZvKCdWZWFtc0hlbHBlcnMgOjogVGhlIGhlbHBlciAnICsga2V5ICsgJyBpcyBhbHJlYWR5IGRlZmluZWQhIFBsZWFzZSBkZWZpbmUgYSBuZXcgbmFtZSBmb3I6ICcsIHBhcmFtc1swXVtrZXldKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChwYXJhbXMubGVuZ3RoID09PSAyKSB7XG5cdFxuXHRcdFx0XHRcdGlmICghVmVhbXMuaGVscGVyc1twYXJhbXNbMF1dKSB7XG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mIHBhcmFtc1swXSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIHBhcmFtc1sxXSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdWZWFtc0hlbHBlcnMgOjogWW91IG5lZWQgdG8gcGFzcyBhIHN0cmluZyBhcyBmaXJzdCBhcmd1bWVudCBhbmQgdGhlIGhlbHBlciBmdW5jdGlvbiBhcyBzZWNvbmQgb25lLicpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRWZWFtcy5oZWxwZXJzW3BhcmFtc1swXV0gPSBwYXJhbXNbMV07XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuaW5mbygnVmVhbXNIZWxwZXJzIDo6IFRoZSBoZWxwZXIgJyArIHBhcmFtc1swXSArICcgaXMgYWxyZWFkeSBkZWZpbmVkISBQbGVhc2UgZGVmaW5lIGEgbmV3IG5hbWUgZm9yOiAnLCBwYXJhbXNbMV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XG5cdFx0XHR0aGlzLmFkZERlZmF1bHRIZWxwZXJzKFZlYW1zKTtcblx0XHR9LFxuXHRcblx0XHRhZGREZWZhdWx0SGVscGVyczogZnVuY3Rpb24gYWRkRGVmYXVsdEhlbHBlcnMoVmVhbXMpIHtcblx0XHRcdFZlYW1zLmFkZEhlbHBlcigncXVlcnlTZWxlY3RvckFycmF5JywgX3F1ZXJ5U2VsZWN0b3JBcnJheTIuZGVmYXVsdCk7XG5cdFx0XHRWZWFtcy5hZGRIZWxwZXIoJ2V4dGVuZCcsIF9leHRlbmQyLmRlZmF1bHQpO1xuXHRcdFx0VmVhbXMuYWRkSGVscGVyKCdpc1RvdWNoJywgX2lzVG91Y2gyLmRlZmF1bHQpO1xuXHRcdFx0VmVhbXMuYWRkSGVscGVyKCdtaXhpbicsIF9taXhpbjIuZGVmYXVsdCk7XG5cdFx0XHRWZWFtcy5hZGRIZWxwZXIoJ21ldGhvZEV4dGVuZCcsIF9tZXRob2RFeHRlbmQyLmRlZmF1bHQpO1xuXHRcdFx0VmVhbXMuYWRkSGVscGVyKCd0aHJvdHRsZScsIF90aHJvdHRsZTIuZGVmYXVsdCk7XG5cdFx0XHRWZWFtcy5hZGRIZWxwZXIoJ2ZvckVhY2gnLCBfZm9yRWFjaDIuZGVmYXVsdCk7XG5cdFx0XHRWZWFtcy5hZGRIZWxwZXIoJ21ha2VJZCcsIF9tYWtlSWQyLmRlZmF1bHQpO1xuXHRcdH1cblx0fTtcblx0XG5cdGV4cG9ydHMuZGVmYXVsdCA9IFZlYW1zSGVscGVycztcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAxNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0LyoqXG5cdCAqIFRvdWNoIERldGVjdGlvblxuXHQgKi9cblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzLmRlZmF1bHQgPSBpc1RvdWNoO1xuXHRmdW5jdGlvbiBpc1RvdWNoKCkge1xuXHQgIHJldHVybiAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3c7XG5cdH07XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdC8qKlxuXHQgKiBUaHJvdHRsZSBtZXRob2QgZm9yIHJlc2l6ZSBldmVudHMgYW5kIG1vcmVcblx0ICpcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyAtIEZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgZXhlY3V0ZWQuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB3YWl0IC0gbnVtYmVyIHRvIHdhaXQgaW4gbWlsbGlzZWNvbmRzLlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGltbWVkaWF0ZSAtIGV4ZWN1dGUgZnVuY3Rpb24gaW1tZWRpYXRlbHkuXG5cdCAqL1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdFx0dmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IHRocm90dGxlO1xuXHRmdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcblx0XHR2YXIgdGltZW91dCA9IHZvaWQgMDtcblx0XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBjb250ZXh0ID0gdGhpcztcblx0XHRcdHZhciBhcmdzID0gYXJndW1lbnRzO1xuXHRcdFx0dmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG5cdFx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbiBsYXRlcigpIHtcblx0XHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0XHRcdGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHRcdFx0fTtcblx0XG5cdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFxuXHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuXHRcblx0XHRcdGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHRcdH07XG5cdH07XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdC8qKlxuXHQgKiBHZXQgZG9tIGVsZW1lbnRzIGluIGFuIGFycmF5XG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBlbGVtIC0gUmVxdWlyZWQ6IHNlbGVjdG9yXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbY29udGV4dF0gLSBPcHRpb25hbDogY29udGV4dFxuXHQgKlxuXHQgKiBAcmV0dXJuIHtBcnJheX1cblx0ICovXG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0ZXhwb3J0cy5kZWZhdWx0ID0gcXVlcnlTZWxlY3RvckFycmF5O1xuXHRmdW5jdGlvbiBxdWVyeVNlbGVjdG9yQXJyYXkoZWxlbSwgY29udGV4dCkge1xuXHQgIGlmICghZWxlbSkgdGhyb3cgbmV3IEVycm9yKCdJbiBvcmRlciB0byB3b3JrIHdpdGggcXVlcnlTZWxlY3RvckFycmF5IHlvdSBuZWVkIHRvIGRlZmluZSBhbiBlbGVtZW50IGFzIHN0cmluZyEnKTtcblx0ICB2YXIgZWwgPSBlbGVtO1xuXHQgIHZhciBjdXN0b21Db250ZXh0ID0gY29udGV4dCB8fCBkb2N1bWVudDtcblx0XG5cdCAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGN1c3RvbUNvbnRleHQucXVlcnlTZWxlY3RvckFsbChlbCkpO1xuXHR9O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDIwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcblx0ICogU2ltcGxlIGZvckVhY2ggbWV0aG9kXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gYXJyYXkgb2Ygb2JqZWN0c1xuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIGNhbGxiYWNrIGZ1bmN0aW9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzY29wZSAtIHNjb3BlIG9mIGZ1bmN0aW9uXG5cdCAqL1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IGZvckVhY2g7XG5cdGZ1bmN0aW9uIGZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBzY29wZSkge1xuXHQgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcblx0ICAgIGNhbGxiYWNrLmNhbGwoc2NvcGUsIGksIGFycmF5W2ldKTtcblx0ICB9XG5cdH07XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9XG4vKioqKioqLyBdKVxufSk7XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD12ZWFtcy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFZlYW1zRE9NID0ge1xuXHRvcHRpb25zOiB7XG5cdFx0RE9NOiBmYWxzZVxuXHR9LFxuXHRwbHVnaW5OYW1lOiAnJCcsXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uIChWZWFtcywgeyBET00gfSkge1xuXHRcdGlmICghRE9NKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdWZWFtc0RPTSA6OiBZb3UgbmVlZCB0byBwYXNzIGFuIG9wdGlvbnMgb2JqZWN0IHdpdGggYSBET00gaGFuZGxlcjogb3B0aW9ucy5ET00hJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChWZWFtcy4kKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnVmVhbXNET00gOjogSXQgc2VlbXMgdGhhdCB5b3UgaGF2ZSBhbHJlYWR5IGRlZmluZWQgYSBET00gaGFuZGxlci4gSSBhbSBvdmVyd3JpdGluZyBpdCBub3cgZm9yIHlvdSA7KScpO1xuXHRcdH1cblxuXHRcdFZlYW1zLiQgPSB0aGlzLm9wdGlvbnMuRE9NID0gRE9NO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWZWFtc0RPTTsiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFZlYW1zTG9nZ2VyID0ge1xuXHRwbHVnaW5OYW1lOiAnTG9nZ2VyJyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24gKFZlYW1zKSB7XG5cdFx0LyoqXG5cdFx0ICogRGV2bW9kZSBhbmQgbG9nZ2VyXG5cdFx0ICovXG5cdFx0VmVhbXMuZGV2bW9kZSA9IGZhbHNlO1xuXHRcdFZlYW1zLmxvZ2dlciA9IGZhbHNlO1xuXG5cdFx0aWYgKGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaC5pbmRleE9mKCdkZXZtb2RlJykgPiAtMSkge1xuXHRcdFx0VmVhbXMuZGV2bW9kZSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaC5pbmRleE9mKCdsb2dnZXInKSA+IC0xKSB7XG5cdFx0XHRWZWFtcy5sb2dnZXIgPSB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIGhpZGUgYWxsIHdhcm5pbmdzIGFuZCBsb2dzIGlmIG5vdCBpbiBkZXZtb2RlXG5cdFx0aWYgKCFWZWFtcy5kZXZtb2RlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyA9IGNvbnNvbGUud2FybiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gYWRkIGNvbnNvbGUgb3V0cHV0IGVsZW1lbnQgKHRyaWdnZXJlZCBieSBwYXJhbWV0ZXIgJ2Rldm1vZGUnIGFuZCAnbG9nZ2VyJyBpbiB1cmwpXG5cdFx0aWYgKFZlYW1zLmRldm1vZGUgJiYgVmVhbXMubG9nZ2VyKSB7XG5cdFx0XHRsZXQgbG9nZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG5cblx0XHRcdGxvZ2dlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ2dlcicpO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsb2dnZXIpO1xuXG5cdFx0XHRjb25zb2xlLndyaXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgYXJndW1lbnRzW2ldID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdFx0bG9nZ2VyLmlubmVySFRNTCArPSAoSlNPTiAmJiBKU09OLnN0cmluZ2lmeSA/IEpTT04uc3RyaW5naWZ5KGFyZ3VtZW50c1tpXSwgdW5kZWZpbmVkLCAyKSA6IGFyZ3VtZW50c1tpXSkgKyAnPGJyIC8+Jztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bG9nZ2VyLmlubmVySFRNTCArPSBhcmd1bWVudHNbaV0gKyAnPGJyIC8+Jztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsb2dnZXIuaW5uZXJIVE1MICs9ICc8YnIgLz4nO1xuXHRcdFx0XHRsb2dnZXIuc2Nyb2xsVG9wID0gbG9nZ2VyLnNjcm9sbEhlaWdodDtcblx0XHRcdH07XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGxvZ2dlci5pbm5lckhUTUwgKz0gJ1tFcnJvcl08YnIgLz4nO1xuXHRcdFx0XHRjb25zb2xlLndyaXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zb2xlLndhcm4gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGxvZ2dlci5pbm5lckhUTUwgKz0gJ1tXYXJuXTxiciAvPic7XG5cdFx0XHRcdGNvbnNvbGUud3JpdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdH07XG5cblx0XHRcdGNvbnNvbGUubG9nID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRsb2dnZXIuaW5uZXJIVE1MICs9ICdbTG9nXTxiciAvPic7XG5cdFx0XHRcdGNvbnNvbGUud3JpdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdH07XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWZWFtc0xvZ2dlcjsiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogSW1wb3J0c1xuICovXG5jb25zdCBWZWFtc01lZGlhUXVlcnlIYW5kbGVyID0ge1xuXHRvcHRpb25zOiB7XG5cdFx0bWVkaWFRdWVyeVByb3A6ICdmb250LWZhbWlseScsXG5cdFx0ZGVsYXk6IDMwMFxuXHR9LFxuXHRwbHVnaW5OYW1lOiAnTWVkaWFRdWVyeUhhbmRsZXInLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbiAoVmVhbXMsIG9wdHMpIHtcblx0XHQvLyBNZWRpYSBRdWVyeVxuXHRcdGxldCBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaGVhZCcpO1xuXG5cdFx0aWYgKG9wdHMpIHtcblx0XHRcdHRoaXMub3B0aW9ucyA9IFZlYW1zLmhlbHBlcnMuZXh0ZW5kKHRoaXMub3B0aW9ucywgb3B0cyB8fCB7fSk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQWRkIGN1cnJlbnQgbWVkaWEgcXVlcnkgdG8gVmVhbXNcblx0XHQgKi9cblx0XHRWZWFtcy5jdXJyZW50TWVkaWEgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShoZWFkWzBdLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHRoaXMub3B0aW9ucy5tZWRpYVF1ZXJ5UHJvcCk7XG5cblx0XHRpZiAoIVZlYW1zLlZlbnQpIHtcblx0XHRcdGNvbnNvbGUuaW5mbygnVmVhbXNNZWRpYVF1ZXJ5SGFuZGxlciA6OiBJbiBvcmRlciB0byB3b3JrIHByb3Blcmx5IHdpdGggdGhlIFZlYW1zTWVkaWFRdWVyeUhhbmRsZXIgcGx1Z2luIHlvdSBzaG91bGQgYWRkIHRoZSBWZWFtc1ZlbnQgcGx1Z2luIScpO1xuXHRcdH1cblxuXHRcdC8vIFRyaWdnZXIgZ2xvYmFsIHJlc2l6ZSBldmVudFxuXHRcdHdpbmRvdy5vbnJlc2l6ZSA9IFZlYW1zLmhlbHBlcnMudGhyb3R0bGUoKGUpID0+IHtcblx0XHRcdGxldCBjdXJyZW50TWVkaWEgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShoZWFkWzBdLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHRoaXMub3B0aW9ucy5tZWRpYVF1ZXJ5UHJvcCk7XG5cdFx0XHRsZXQgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuXHRcdFx0aWYgKGN1cnJlbnRNZWRpYSAhPT0gVmVhbXMuY3VycmVudE1lZGlhKSB7XG5cdFx0XHRcdGxldCBvbGRNZWRpYSA9IFZlYW1zLmN1cnJlbnRNZWRpYTtcblxuXHRcdFx0XHRWZWFtcy5jdXJyZW50TWVkaWEgPSBjdXJyZW50TWVkaWE7XG5cblx0XHRcdFx0Y29uc29sZS5pbmZvKGBWZWFtc01lZGlhUXVlcnlIYW5kbGVyIDo6IEN1cnJlbnQgbWVkaWEgaXMgJHtWZWFtcy5jdXJyZW50TWVkaWF9YCk7XG5cblx0XHRcdFx0aWYgKFZlYW1zLlZlbnQpIHtcblx0XHRcdFx0XHRWZWFtcy5WZW50LnRyaWdnZXIoVmVhbXMuRVZFTlRTLm1lZGlhY2hhbmdlLCB7XG5cdFx0XHRcdFx0XHR0eXBlOiBWZWFtcy5FVkVOVFMubWVkaWFjaGFuZ2UsXG5cdFx0XHRcdFx0XHRjdXJyZW50TWVkaWE6IGN1cnJlbnRNZWRpYSxcblx0XHRcdFx0XHRcdG9sZE1lZGlhOiBvbGRNZWRpYVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh3aWR0aCAhPT0gVmVhbXMuZGV0ZWN0aW9ucy53aWR0aCkge1xuXHRcdFx0XHRWZWFtcy5kZXRlY3Rpb25zLndpZHRoID0gd2lkdGg7XG5cdFx0XHRcdFZlYW1zLlZlbnQudHJpZ2dlcihWZWFtcy5FVkVOVFMucmVzaXplLCBlKTtcblx0XHRcdH1cblx0XHR9LCB0aGlzLm9wdGlvbnMuZGVsYXkpO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWZWFtc01lZGlhUXVlcnlIYW5kbGVyOyIsIid1c2Ugc3RyaWN0JztcblxubGV0IFZlYW1zID0ge307XG5sZXQgX19jYWNoZSA9IFtdO1xubGV0IF9fcmVnaXN0ZXIgPSB7XG5cdG1vZHVsZXNJblJlZ2lzdGVyOiBbXSxcblx0bW9kdWxlc09uQ29uZGl0aW9uczogW10sXG5cdG1vZHVsZXNPbkluaXQ6IFtdLFxuXHRtb2R1bGVzSW5Db250ZXh0OiBbXVxufTtcblxuLyoqXG4gKiBUT0RPOiBDbGVhbiB1cCBtdXRhdGlvbiBvYnNlcnZlclxuICovXG5cbi8qKlxuICogLSBHZXQgbW9kdWxlcyBpbiBET01cbiAqIC0gR2V0IGNsYXNzZXMgYW5kIG9wdGlvbnMgZnJvbSBpbml0IHByb2Nlc3NcbiAqIC0gU3BsaXQgdXAgY29uZGl0aW9uYWwgbW9kdWxlcyBmcm9tIGluaXRpYWwgbW9kdWxlc1xuICogLSBJbml0IG90aGVyIG1vZHVsZXNcbiAqIC0gQmluZCBldmVudHMgd2hlbiBhdmFpbGFibGUgZnJvbSBjb25kaXRpb25hbCBtb2R1bGVzXG4gKiAtXG4gKi9cblxuY2xhc3MgTW9kdWxlcyB7XG5cdGNvbnN0cnVjdG9yKFZFQU1TID0gd2luZG93LlZlYW1zLCBvcHRzKSB7XG5cdFx0VmVhbXMgPSBWRUFNUztcblxuXHRcdHRoaXMub3B0aW9ucyA9IG9wdHM7XG5cblx0XHRpZiAoIXRoaXMub3B0aW9ucy5pbnRlcm5hbENhY2hlT25seSkge1xuXHRcdFx0dGhpcy5fY2FjaGUgPSBfX2NhY2hlOyAvLyBNb2R1bGUgbGlzdFxuXHRcdH1cblxuXHRcdGlmICghdGhpcy5vcHRpb25zLmludGVybmFsUmVnaXN0ZXJPbmx5KSB7XG5cdFx0XHR0aGlzLl9yZWdpc3RlciA9IF9fcmVnaXN0ZXI7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdHRoaXMucXVlcnlTdHJpbmcgPSBgWyR7dGhpcy5vcHRpb25zLmF0dHJQcmVmaXh9LSR7dGhpcy5vcHRpb25zLmF0dHJOYW1lfV1gO1xuXHRcdF9fcmVnaXN0ZXIubW9kdWxlc0luQ29udGV4dCA9IFZlYW1zLmhlbHBlcnMucXVlcnlTZWxlY3RvckFycmF5KHRoaXMucXVlcnlTdHJpbmcpO1xuXG5cdFx0aWYgKHRoaXMub3B0aW9ucy51c2VNdXRhdGlvbk9ic2VydmVyKSB7XG5cdFx0XHR0aGlzLm9ic2VydmUoZG9jdW1lbnQuYm9keSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5iaW5kRXZlbnRzKCk7XG5cdH1cblxuXHRiaW5kRXZlbnRzKCkge1xuXHRcdGlmICghVmVhbXMuVmVudCAmJiB0aGlzLm9wdGlvbnMudXNlTXV0YXRpb25PYnNlcnZlciA9PT0gZmFsc2UpIHtcblx0XHRcdGNvbnNvbGUuaW5mbygnVmVhbXNNb2R1bGVzIDo6IEluIG9yZGVyIHRvIHdvcmsgd2l0aCB0aGUgdGhlIGFqYXggaGFuZGxpbmcgaW4gVmVhbXNNb2R1bGVzSGFuZGxlciAnICtcblx0XHRcdFx0J3lvdSBuZWVkIHRvIGRlZmluZSBcInVzZU11dGF0aW9uT2JzZXJ2ZXJcIiBvciB1c2UgdGhlIFZlYW1zVmVudCBwbHVnaW4hJyk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoVmVhbXMuVmVudCAmJiB0aGlzLm9wdGlvbnMudXNlTXV0YXRpb25PYnNlcnZlciA9PT0gZmFsc2UpIHtcblx0XHRcdFZlYW1zLlZlbnQub24oVmVhbXMuRVZFTlRTLkRPTWNoYW5nZWQsIChlLCBjb250ZXh0KSA9PiB7XG5cdFx0XHRcdF9fcmVnaXN0ZXIubW9kdWxlc0luQ29udGV4dCA9IHRoaXMuZ2V0TW9kdWxlc0luQ29udGV4dChjb250ZXh0KTtcblxuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLmxvZ3MpIHtcblx0XHRcdFx0XHRjb25zb2xlLmluZm8oJ1ZlYW1zTW9kdWxlcyA6OiBSZWNvcmRpbmcgbmV3IGNvbnRleHQuIFdoZW4gYXZhaWxhYmxlIG5ldyBtb2R1bGVzIHdpbGwgYmUgaW5pdGlhbGlzZWQgaW46ICcsIGNvbnRleHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5yZWdpc3RlckFsbCgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdC8vIFNUQVRJQyBDQUNIRSBIQU5ETEVSXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdC8qKlxuXHQgKiBTYXZlIHRoZSBtb2R1bGUgaW4gX19jYWNoZS5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IG1vZHVsZSAtIG1vZHVsZSBtZXRhZGF0YSBvYmplY3QgKEBzZWUgVmVhbXNDb21wb25lbnQubWV0YURhdGEoKSlcblx0ICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgLSBtb2R1bGUgZWxlbWVudCAodGhpcy5lbClcblx0ICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlIC0gbW9kdWxlIGluc3RhbmNlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgLSBtb2R1bGUgbmFtZXNwYWNlXG5cdCAqL1xuXHRzdGF0aWMgYWRkVG9DYWNoZSh7bW9kdWxlLCBlbGVtZW50LCBpbnN0YW5jZSwgbmFtZXNwYWNlfSkge1xuXHRcdF9fY2FjaGUucHVzaCh7XG5cdFx0XHRtb2R1bGUsXG5cdFx0XHRlbGVtZW50LFxuXHRcdFx0aW5zdGFuY2UsXG5cdFx0XHRuYW1lc3BhY2Vcblx0XHR9KTtcblxuXHRcdGlmIChWZWFtcy5WZW50ICYmIFZlYW1zLkVWRU5UUy5tb2R1bGVDYWNoZWQpIHtcblx0XHRcdFZlYW1zLlZlbnQudHJpZ2dlcihWZWFtcy5FVkVOVFMubW9kdWxlQ2FjaGVkLCB7XG5cdFx0XHRcdG1vZHVsZSxcblx0XHRcdFx0ZWxlbWVudFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIHJlbW92ZUZyb21DYWNoZUJ5S2V5KG9iaiwga2V5ID0gJ2VsZW1lbnQnKSB7XG5cdFx0bGV0IGRlbGV0ZUluZGV4O1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBfX2NhY2hlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgY2FjaGVJdGVtID0gX19jYWNoZVtpXTtcblxuXHRcdFx0aWYgKGNhY2hlSXRlbVtrZXldID09PSBvYmopIHtcblx0XHRcdFx0aWYgKGNhY2hlSXRlbS5pbnN0YW5jZS53aWxsVW5tb3VudCkgY2FjaGVJdGVtLmluc3RhbmNlLndpbGxVbm1vdW50KCk7XG5cdFx0XHRcdGlmIChjYWNoZUl0ZW0uaW5zdGFuY2UudW5yZWdpc3RlckV2ZW50cykgY2FjaGVJdGVtLmluc3RhbmNlLnVucmVnaXN0ZXJFdmVudHMoKTtcblx0XHRcdFx0aWYgKGNhY2hlSXRlbS5pbnN0YW5jZS5kaWRVbm1vdW50KSBjYWNoZUl0ZW0uaW5zdGFuY2UuZGlkVW5tb3VudCgpO1xuXG5cdFx0XHRcdGRlbGV0ZUluZGV4ID0gaTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZGVsZXRlSW5kZXgpIF9fY2FjaGUuc3BsaWNlKGRlbGV0ZUluZGV4LCAxKTtcblx0fVxuXG5cdHN0YXRpYyBjaGVja01vZHVsZUluQ2FjaGUob2JqLCBrZXkgPSAnZWxlbWVudCcsIG5hbWVzcGFjZSA9IHVuZGVmaW5lZCkge1xuXHRcdGxldCBzdGF0ZSA9IGZhbHNlO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBfX2NhY2hlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgY2FjaGVJdGVtID0gX19jYWNoZVtpXTtcblxuXHRcdFx0c3RhdGUgPSAobmFtZXNwYWNlICE9PSB1bmRlZmluZWQpID8gY2FjaGVJdGVtW2tleV0gPT09IG9iaiAmJiBjYWNoZUl0ZW0ubmFtZXNwYWNlID09PSBuYW1lc3BhY2UgOiBjYWNoZUl0ZW1ba2V5XSA9PT0gb2JqO1xuXG5cdFx0XHRpZiAoc3RhdGUpIGJyZWFrO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGF0ZTtcblx0fVxuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvLyBDT05ESVRJT05TIEhBTkRMRVJcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0c3RhdGljIGlzQ29uZGl0aW9uKHtjb25kaXRpb25zfSkge1xuXHRcdHJldHVybiBjb25kaXRpb25zICYmIHR5cGVvZiBjb25kaXRpb25zID09PSAnZnVuY3Rpb24nO1xuXHR9XG5cblx0c3RhdGljIG1ha2VDb25kaXRpb25DaGVjayh7Y29uZGl0aW9uc30pIHtcblx0XHRpZiAoY29uZGl0aW9ucyAmJiB0eXBlb2YgY29uZGl0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuIGNvbmRpdGlvbnMoKTtcblx0XHR9XG5cdH1cblxuXHRiaW5kQ29uZGl0aW9ucygpIHtcblx0XHRfX3JlZ2lzdGVyLm1vZHVsZXNPbkNvbmRpdGlvbnMuZm9yRWFjaCgobW9kdWxlKSA9PiB7XG5cdFx0XHRpZiAobW9kdWxlLmNvbmRpdGlvbnNMaXN0ZW5PbiAmJiBtb2R1bGUuY29uZGl0aW9uc0xpc3Rlbk9uLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLmJpbmRDb25kaXRpb24obW9kdWxlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGJpbmRDb25kaXRpb24obW9kdWxlKSB7XG5cdFx0bGV0IGdsb2JhbEV2dHMgPSBtb2R1bGUuY29uZGl0aW9uc0xpc3Rlbk9uLmpvaW4oJyAnKTtcblxuXHRcdGlmIChWZWFtcy5WZW50KSB7XG5cdFx0XHRWZWFtcy5WZW50LnN1YnNjcmliZShnbG9iYWxFdnRzLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJDb25kaXRpb25hbE1vZHVsZShtb2R1bGUpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdC8vIFVOL1JFR0lTVEVSIEhBTkRMRVJcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0LyoqXG5cdCAqIFNwbGl0IHVwIG1vZHVsZXMgZGVwZW5kaW5nIG9uIGNvbmRpdGlvbiBjaGVja1xuXHQgKi9cblx0c3BsaXRVcE1vZHVsZXMoKSB7XG5cdFx0X19yZWdpc3Rlci5tb2R1bGVzSW5SZWdpc3Rlci5mb3JFYWNoKChvYmopID0+IHtcblx0XHRcdGlmICh0aGlzLmNvbnN0cnVjdG9yLmlzQ29uZGl0aW9uKG9iaikpIHtcblx0XHRcdFx0X19yZWdpc3Rlci5tb2R1bGVzT25Db25kaXRpb25zLnB1c2gob2JqKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9fcmVnaXN0ZXIubW9kdWxlc09uSW5pdC5wdXNoKG9iaik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXIgbXVsdGlwbGUgbW9kdWxlcy5cblx0ICpcblx0ICogQHBhcmFtIHtBcnJheX0gYXJyIC0gQXJyYXkgd2hpY2ggY29udGFpbnMgdGhlIG1vZHVsZXMgYXMgb2JqZWN0LlxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRyZWdpc3RlcihhcnIpIHtcblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdWZWFtc01vZHVsZXMgOjogWW91IG5lZWQgdG8gcGFzcyBhbiBhcnJheSB0byByZWdpc3RlcigpIScpO1xuXHRcdH1cblxuXHRcdF9fcmVnaXN0ZXIubW9kdWxlc0luUmVnaXN0ZXIgPSBfX3JlZ2lzdGVyLm1vZHVsZXNJblJlZ2lzdGVyLmNvbmNhdChhcnIpO1xuXG5cdFx0dGhpcy5zcGxpdFVwTW9kdWxlcygpO1xuXHRcdHRoaXMuYmluZENvbmRpdGlvbnMoKTtcblx0XHR0aGlzLnJlZ2lzdGVyQWxsKCk7XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXIgYWxsIG1vZHVsZXNcblx0ICovXG5cdHJlZ2lzdGVyQWxsKCkge1xuXHRcdGlmICghX19yZWdpc3Rlci5tb2R1bGVzSW5SZWdpc3RlcikgcmV0dXJuO1xuXG5cdFx0dGhpcy5yZWdpc3RlckluaXRpYWxNb2R1bGVzKCk7XG5cdFx0dGhpcy5yZWdpc3RlckNvbmRpdGlvbmFsTW9kdWxlcygpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyIGFsbCBpbml0aWFsIG1vZHVsZXNcblx0ICovXG5cdHJlZ2lzdGVySW5pdGlhbE1vZHVsZXMoKSB7XG5cdFx0X19yZWdpc3Rlci5tb2R1bGVzT25Jbml0LmZvckVhY2goKG9iaikgPT4ge1xuXHRcdFx0dGhpcy5yZWdpc3Rlck9uZShvYmopO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyIGNvbmRpdGlvbmFsIG1vZHVsZXNcblx0ICpcblx0ICogVGhlcmVmb3JlIHdlIGNoZWNrIHRoZSBjb25kaXRpb24gYW5kXG5cdCAqIHdoZW4gdHJ1ZSByZWdpc3RlciB0aGUgc3BlY2lmaWMgbW9kdWxlXG5cdCAqIHdoZW4gZmFsc2UgdW5yZWdpc3RlciB0aGUgc3BlY2lmaWMgbW9kdWxlXG5cdCAqL1xuXHRyZWdpc3RlckNvbmRpdGlvbmFsTW9kdWxlcygpIHtcblx0XHRfX3JlZ2lzdGVyLm1vZHVsZXNPbkNvbmRpdGlvbnMuZm9yRWFjaCgob2JqKSA9PiB7XG5cdFx0XHR0aGlzLnJlZ2lzdGVyQ29uZGl0aW9uYWxNb2R1bGUob2JqKTtcblx0XHR9KTtcblx0fVxuXG5cdHJlZ2lzdGVyQ29uZGl0aW9uYWxNb2R1bGUob2JqKSB7XG5cdFx0aWYgKHRoaXMuY29uc3RydWN0b3IubWFrZUNvbmRpdGlvbkNoZWNrKG9iaikpIHtcblx0XHRcdHRoaXMucmVnaXN0ZXJPbmUob2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy51bnJlZ2lzdGVyT25lKG9iaik7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyIG9uZSBtb2R1bGUgYW5kIGluaXQgdGhlIGVsZW1lbnRzIGluIHRoZSBzcGVjaWZpYyBjb250ZXh0XG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgLSBSZXF1aXJlZDogZWxlbWVudCBuYW1lIGluIERPTVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZG9tTmFtZSAtIFJlcXVpcmVkOiBlbGVtZW50IG5hbWUgaW4gRE9NXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBtb2R1bGUgLSBSZXF1aXJlZDogY2xhc3Mgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIHJlbmRlciB5b3VyIG1vZHVsZVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZW5kZXI9dHJ1ZV0gLSBPcHRpb25hbDogcmVuZGVyIHRoZSBjbGFzcywgaWYgZmFsc2UgdGhlIGNsYXNzIHdpbGwgb25seSBiZSBpbml0aWFsaXplZFxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2JdIC0gT3B0aW9uYWw6IHByb3ZpZGUgYSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGV4ZWN1dGVkIGFmdGVyIGluaXRpYWxpc2F0aW9uXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBPcHRpb25hbDogWW91IGNhbiBwYXNzIG9wdGlvbnMgdG8gdGhlIG1vZHVsZSB2aWEgSlMgKFVzZWZ1bCBmb3IgRE9NQ2hhbmdlZClcblx0ICpcblx0ICovXG5cdHJlZ2lzdGVyT25lKHtuYW1lc3BhY2UsIGRvbU5hbWUsIG1vZHVsZSwgcmVuZGVyLCBjYiwgb3B0aW9uc30pIHtcblx0XHRsZXQgbmFtZVNwYWNlID0gbmFtZXNwYWNlID8gbmFtZXNwYWNlIDogZG9tTmFtZTtcblxuXHRcdGlmICghbW9kdWxlKSB0aHJvdyBuZXcgRXJyb3IoJ1ZlYW1zTW9kdWxlcyA6OiBJbiBvcmRlciB0byB3b3JrIHdpdGggcmVnaXN0ZXIoKSB5b3UgbmVlZCB0byBkZWZpbmUgYSBtb2R1bGUhJyk7XG5cdFx0aWYgKCFuYW1lU3BhY2UpdGhyb3cgbmV3IEVycm9yKCdWZWFtc01vZHVsZXMgOjogSW4gb3JkZXIgdG8gd29yayB3aXRoIHJlZ2lzdGVyKCkgeW91IG5lZWQgdG8gZGVmaW5lIGEgbW9kdWxlIScpO1xuXG5cdFx0dGhpcy5pbml0TW9kdWxlcyh7XG5cdFx0XHRuYW1lc3BhY2U6IG5hbWVTcGFjZSxcblx0XHRcdG1vZHVsZSxcblx0XHRcdHJlbmRlcixcblx0XHRcdGNiLFxuXHRcdFx0b3B0aW9uc1xuXHRcdH0pO1xuXHR9XG5cblx0dW5yZWdpc3Rlck9uZSh7bmFtZXNwYWNlfSkge1xuXHRcdGlmICh0aGlzLmNvbnN0cnVjdG9yLmNoZWNrTW9kdWxlSW5DYWNoZShuYW1lc3BhY2UsICduYW1lc3BhY2UnKSA9PT0gdHJ1ZSkge1xuXHRcdFx0dGhpcy5jb25zdHJ1Y3Rvci5yZW1vdmVGcm9tQ2FjaGVCeUtleShuYW1lc3BhY2UsICduYW1lc3BhY2UnKTtcblx0XHR9XG5cdH1cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly8gSU5JVCBIQU5ETEVSXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplIGEgbW9kdWxlIGFuZCByZW5kZXIgaXQgYW5kL29yIHByb3ZpZGUgYSBjYWxsYmFjayBmdW5jdGlvblxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIC0gUmVxdWlyZWQ6IGRvbSBuYW1lIG9mIHRoZSBlbGVtZW50XG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBtb2R1bGUgLSBSZXF1aXJlZDogY2xhc3Mgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIHJlbmRlciB5b3VyIG1vZHVsZVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZW5kZXI9dHJ1ZV0gLSBPcHRpb25hbDogcmVuZGVyIHRoZSBjbGFzcywgaWYgZmFsc2UgdGhlIGNsYXNzIHdpbGwgb25seSBiZSBpbml0aWFsaXplZFxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gT3B0aW9uYWw6IFlvdSBjYW4gcGFzcyBvcHRpb25zIHRvIHRoZSBtb2R1bGUgdmlhIEpTIChVc2VmdWwgZm9yIERPTUNoYW5nZWQpXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYl0gLSBPcHRpb25hbDogcHJvdmlkZSBhIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgZXhlY3V0ZWQgYWZ0ZXIgaW5pdGlhbGlzYXRpb25cblx0ICpcblx0ICovXG5cdGluaXRNb2R1bGVzKHtuYW1lc3BhY2UsIG1vZHVsZSwgcmVuZGVyLCBvcHRpb25zLCBjYn0pIHtcblx0XHRWZWFtcy5oZWxwZXJzLmZvckVhY2goX19yZWdpc3Rlci5tb2R1bGVzSW5Db250ZXh0LCAoaSwgZWwpID0+IHtcblx0XHRcdHRoaXMuaW5pdE1vZHVsZSh7XG5cdFx0XHRcdGVsLFxuXHRcdFx0XHRuYW1lc3BhY2UsXG5cdFx0XHRcdG9wdGlvbnMsXG5cdFx0XHRcdG1vZHVsZSxcblx0XHRcdFx0cmVuZGVyLFxuXHRcdFx0XHRjYlxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRpbml0TW9kdWxlKHtlbCwgbmFtZXNwYWNlLCBvcHRpb25zLCBtb2R1bGUsIHJlbmRlciwgY2J9KSB7XG5cdFx0bGV0IG5vUmVuZGVyID0gZWwuZ2V0QXR0cmlidXRlKGAke3RoaXMub3B0aW9ucy5hdHRyUHJlZml4fS1uby1yZW5kZXJgKSB8fCByZW5kZXIgPT09IGZhbHNlIHx8IGZhbHNlO1xuXHRcdGxldCBkYXRhTW9kdWxlcyA9IGVsLmdldEF0dHJpYnV0ZShgJHt0aGlzLm9wdGlvbnMuYXR0clByZWZpeH0tJHt0aGlzLm9wdGlvbnMuYXR0ck5hbWV9YCkuc3BsaXQoJyAnKTtcblxuXHRcdGlmIChkYXRhTW9kdWxlcy5pbmRleE9mKG5hbWVzcGFjZSkgIT09IC0xKSB7XG5cdFx0XHQvLyBDaGVjayBpbml0IHN0YXRlXG5cdFx0XHRpZiAodGhpcy5jb25zdHJ1Y3Rvci5jaGVja01vZHVsZUluQ2FjaGUoZWwsICdlbGVtZW50JywgbmFtZXNwYWNlKSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRjb25zb2xlLmluZm8oJ1ZlYW1zTW9kdWxlcyA6OiBFbGVtZW50IGlzIGFscmVhZHkgaW4gY2FjaGUgYW5kIGluaXRpYWxpemVkOiAnKTtcblx0XHRcdFx0Y29uc29sZS5sb2coZWwpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIEdvIGFoZWFkIHdoZW4gY29uZGl0aW9uIGlzIHRydWVcblx0XHRcdGxldCBhdHRycyA9IGVsLmdldEF0dHJpYnV0ZShgJHt0aGlzLm9wdGlvbnMuYXR0clByZWZpeH0tJHt0aGlzLm9wdGlvbnMuYXR0ck9wdGlvbnN9YCk7XG5cdFx0XHRsZXQgbWVyZ2VkT3B0aW9ucyA9IFZlYW1zLmhlbHBlcnMuZXh0ZW5kKEpTT04ucGFyc2UoYXR0cnMpLCBvcHRpb25zIHx8IHt9KTtcblx0XHRcdGxldCBNb2R1bGUgPSBtb2R1bGU7XG5cdFx0XHRsZXQgaW5zdGFuY2UgPSBuZXcgTW9kdWxlKHtcblx0XHRcdFx0ZWwsXG5cdFx0XHRcdG5hbWVzcGFjZSxcblx0XHRcdFx0b3B0aW9uczogbWVyZ2VkT3B0aW9ucyxcblx0XHRcdFx0YXBwSW5zdGFuY2U6IFZlYW1zXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5jb25zdHJ1Y3Rvci5hZGRUb0NhY2hlKHtcblx0XHRcdFx0ZWxlbWVudDogZWwsXG5cdFx0XHRcdG1vZHVsZSxcblx0XHRcdFx0aW5zdGFuY2UsXG5cdFx0XHRcdG5hbWVzcGFjZVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIE1vdW50IHByb2Nlc3Ncblx0XHRcdGlmIChpbnN0YW5jZS53aWxsTW91bnQpIGluc3RhbmNlLndpbGxNb3VudCgpO1xuXG5cdFx0XHQvLyBSZW5kZXIgYWZ0ZXIgaW5pdGlhbCBtb2R1bGUgbG9hZGluZ1xuXHRcdFx0aWYgKCFub1JlbmRlcikgaW5zdGFuY2UucmVuZGVyKCk7XG5cblx0XHRcdC8vIFByb3ZpZGUgY2FsbGJhY2sgZnVuY3Rpb24gaW4gd2hpY2ggeW91IGNhbiB1c2UgbW9kdWxlIGFuZCBvcHRpb25zXG5cdFx0XHRpZiAoY2IgJiYgdHlwZW9mIChjYikgPT09ICdmdW5jdGlvbicpIGNiKG1vZHVsZSwgbWVyZ2VkT3B0aW9ucyk7XG5cblx0XHRcdC8vIE1vdW50IHByb2Nlc3Ncblx0XHRcdGlmIChpbnN0YW5jZS5kaWRNb3VudCkgaW5zdGFuY2UuZGlkTW91bnQoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQWRkIG11dGF0aW9uIG9ic2VydmVyIHRvIG9ic2VydmUgbmV3IG1vZHVsZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0IC0gQ29udGV4dCBmb3IgdGhlIG11dGF0aW9uIG9ic2VydmVyXG5cdCAqXG5cdCAqIFRPRE86IEltcHJvdmUgZm9yIGxvb3BzXG5cdCAqL1xuXHRvYnNlcnZlKGNvbnRleHQpIHtcblx0XHRsZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XG5cdFx0XHQvLyBsb29rIHRocm91Z2ggYWxsIG11dGF0aW9ucyB0aGF0IGp1c3Qgb2NjdXJlZFxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbnMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0Ly8gbG9vayB0aHJvdWdoIGFsbCBhZGRlZCBub2RlcyBvZiB0aGlzIG11dGF0aW9uXG5cblx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBtdXRhdGlvbnNbaV0uYWRkZWROb2Rlcy5sZW5ndGg7ICsraikge1xuXHRcdFx0XHRcdGxldCBhZGRlZE5vZGUgPSBtdXRhdGlvbnNbaV0uYWRkZWROb2Rlc1tqXTtcblxuXHRcdFx0XHRcdGlmIChhZGRlZE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuXHRcdFx0XHRcdFx0aWYgKGFkZGVkTm9kZS5nZXRBdHRyaWJ1dGUoYCR7dGhpcy5vcHRpb25zLmF0dHJQcmVmaXh9LSR7dGhpcy5vcHRpb25zLmF0dHJOYW1lfWApKSB7XG5cdFx0XHRcdFx0XHRcdGxldCBuYW1lc3BhY2UgPSBhZGRlZE5vZGUuZ2V0QXR0cmlidXRlKGAke3RoaXMub3B0aW9ucy5hdHRyUHJlZml4fS0ke3RoaXMub3B0aW9ucy5hdHRyTmFtZX1gKTtcblxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLmxvZ3MpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmluZm8oYFZlYW1zTW9kdWxlcyA6OiBSZWNvcmRpbmcgYSBuZXcgbW9kdWxlIHdpdGggdGhlIG5hbWVzcGFjZSAke25hbWVzcGFjZX0gYXQ6IGAsIGFkZGVkTm9kZSk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBtb2R1bGUgb2YgX19yZWdpc3Rlci5tb2R1bGVzSW5SZWdpc3Rlcikge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChtb2R1bGUubmFtZXNwYWNlID09PSBuYW1lc3BhY2UpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuaW5pdE1vZHVsZSh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsOiBhZGRlZE5vZGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlLm1vZHVsZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZXNwYWNlOiBtb2R1bGUubmFtZXNwYWNlXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICh0aGlzLmdldE1vZHVsZXNJbkNvbnRleHQoYWRkZWROb2RlKS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0X19yZWdpc3Rlci5tb2R1bGVzSW5Db250ZXh0ID0gdGhpcy5nZXRNb2R1bGVzSW5Db250ZXh0KGFkZGVkTm9kZSk7XG5cblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5sb2dzKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5pbmZvKCdWZWFtc01vZHVsZXMgOjogUmVjb3JkaW5nIG5ldyBjb250ZXh0LiBXaGVuIGF2YWlsYWJsZSBuZXcgbW9kdWxlcyB3aWxsIGJlIGluaXRpYWxpc2VkIGluOiAnLCBhZGRlZE5vZGUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0dGhpcy5yZWdpc3RlckFsbCgpO1xuXG5cdFx0XHRcdFx0XHRcdF9fcmVnaXN0ZXIubW9kdWxlc0luQ29udGV4dCA9IHRoaXMuZ2V0TW9kdWxlc0luQ29udGV4dChkb2N1bWVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBtdXRhdGlvbnNbaV0ucmVtb3ZlZE5vZGVzLmxlbmd0aDsgKytqKSB7XG5cdFx0XHRcdFx0bGV0IHJlbW92ZWROb2RlID0gbXV0YXRpb25zW2ldLnJlbW92ZWROb2Rlc1tqXTtcblxuXHRcdFx0XHRcdGlmIChyZW1vdmVkTm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRcdFx0XHRpZiAocmVtb3ZlZE5vZGUuZ2V0QXR0cmlidXRlKGAke3RoaXMub3B0aW9ucy5hdHRyUHJlZml4fS0ke3RoaXMub3B0aW9ucy5hdHRyTmFtZX1gKSkge1xuXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMubG9ncykge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuaW5mbygnVmVhbXNNb2R1bGVzIDo6IFJlY29yZGluZyBkZWxldGlvbiBvZiBtb2R1bGU6ICcsIHJlbW92ZWROb2RlKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHRoaXMuY29uc3RydWN0b3IucmVtb3ZlRnJvbUNhY2hlQnlLZXkocmVtb3ZlZE5vZGUpO1xuXG5cdFx0XHRcdFx0XHRcdF9fcmVnaXN0ZXIubW9kdWxlc0luQ29udGV4dCA9IHRoaXMuZ2V0TW9kdWxlc0luQ29udGV4dChkb2N1bWVudCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICh0aGlzLmdldE1vZHVsZXNJbkNvbnRleHQocmVtb3ZlZE5vZGUpLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRfX3JlZ2lzdGVyLm1vZHVsZXNJbkNvbnRleHQgPSB0aGlzLmdldE1vZHVsZXNJbkNvbnRleHQocmVtb3ZlZE5vZGUpO1xuXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMubG9ncykge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuaW5mbygnVmVhbXNNb2R1bGVzIDo6IFJlY29yZGluZyBkZWxldGlvbiBvZiBET00gZWxlbWVudC4gV2hlbiBhdmFpbGFibGUgbW9kdWxlcyB3aWxsIGJlIHVuYm91bmQgaW4gJywgcmVtb3ZlZE5vZGUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0X19yZWdpc3Rlci5tb2R1bGVzSW5Db250ZXh0LmZvckVhY2goKG5vZGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmNvbnN0cnVjdG9yLnJlbW92ZUZyb21DYWNoZUJ5S2V5KG5vZGUpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0XHRfX3JlZ2lzdGVyLm1vZHVsZXNJbkNvbnRleHQgPSB0aGlzLmdldE1vZHVsZXNJbkNvbnRleHQoZG9jdW1lbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShjb250ZXh0LCB7XG5cdFx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0XHRzdWJ0cmVlOiB0cnVlXG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IE1vZHVsZXMgaW4gYSBzcGVjaWZpYyBjb250ZXh0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dCAtIENvbnRleHQgZm9yIHF1ZXJ5IHNwZWNpZmljIHN0cmluZ1xuXHQgKi9cblx0Z2V0TW9kdWxlc0luQ29udGV4dChjb250ZXh0KSB7XG5cdFx0cmV0dXJuIFZlYW1zLmhlbHBlcnMucXVlcnlTZWxlY3RvckFycmF5KHRoaXMucXVlcnlTdHJpbmcsIGNvbnRleHQpO1xuXHR9XG59XG5cbi8qKlxuICogUGx1Z2luIG9iamVjdFxuICovXG5jb25zdCBWZWFtc01vZHVsZXMgPSB7XG5cdG9wdGlvbnM6IHtcblx0XHRERUJVRzogZmFsc2UsXG5cdFx0YXR0clByZWZpeDogJ2RhdGEtanMnLFxuXHRcdGF0dHJOYW1lOiAnbW9kdWxlJyxcblx0XHRhdHRyT3B0aW9uczogJ29wdGlvbnMnLFxuXHRcdGxvZ3M6IGZhbHNlLFxuXHRcdGludGVybmFsQ2FjaGVPbmx5OiB0cnVlLFxuXHRcdGludGVybmFsUmVnaXN0ZXJPbmx5OiBmYWxzZSxcblx0XHR1c2VNdXRhdGlvbk9ic2VydmVyOiBmYWxzZVxuXHR9LFxuXHRwbHVnaW5OYW1lOiAnTW9kdWxlc0hhbmRsZXInLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbiAoVmVhbXMsIG9wdHMpIHtcblx0XHR0aGlzLm9wdGlvbnMgPSBWZWFtcy5oZWxwZXJzLmV4dGVuZCh0aGlzLm9wdGlvbnMsIG9wdHMgfHwge30pO1xuXHRcdFZlYW1zLm1vZHVsZXMgPSBWZWFtcy5tb2R1bGVzIHx8IG5ldyBNb2R1bGVzKFZlYW1zLCB0aGlzLm9wdGlvbnMpO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWZWFtc01vZHVsZXM7XG5cbmV4cG9ydCB7IE1vZHVsZXMgfTsiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIFZlbnQgcGx1Z2luIHdoaWNoIGNyZWF0ZXMgYW4gZW1wdHkgb2JqZWN0LlxuICogVGhlIG9iamVjdCB3aWxsIGJlIHVzZWQgYXMgcHVibGlzaC9zdWJzY3JpYmUgcGx1Z2luLlxuICpcbiAqIFRoZSBtb2R1bGUgZXh0ZW5kcyB0aGUgZGVmYXVsdCBFVkVOVFMgb2JqZWN0IG9mIFZlYW1zXG4gKiB3aGVuIHlvdSBwYXNzIHRoZSBvcHRpb24gY2FsbGVkICdmdXJ0aGVyRXZlbnRzJy5cbiAqXG4gKiBAbW9kdWxlIFZlYW1zVmVudFxuICpcbiAqIEBhdXRob3IgU2ViYXN0aWFuIEZpdHpuZXJcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgRXZlbnRzSGFuZGxlclxuICpcbiAqIFB1Yi9TdWIgc3lzdGVtIGZvciBMb29zZWx5IENvdXBsZWQgbG9naWMuXG4gKiBCYXNlZCBvbiBQZXRlciBIaWdnaW5zJyBwb3J0IGZyb20gRG9qbyB0byBqUXVlcnlcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9waGlnZ2luczQyL2Jsb29keS1qcXVlcnktcGx1Z2lucy9ibG9iL21hc3Rlci9wdWJzdWIuanNcbiAqIGFkb3B0ZWQgaHR0cHM6Ly9naXRodWIuY29tL3BoaWdnaW5zNDIvYmxvb2R5LWpxdWVyeS1wbHVnaW5zL2Jsb2IvNTVlNDFkZjliZjA4ZjQyMzc4YmIwOGI5M2VmY2IyODU1NWI2MWFlYi9wdWJzdWIuanNcbiAqXG4gKiBtb2RpZmllZCBieSBTZWJhc3RpYW4gRml0em5lclxuICpcbiAqL1xuY29uc3QgRXZlbnRzSGFuZGxlciA9IChmdW5jdGlvbiAoKSB7XG5cdGxldCBjYWNoZSA9IHt9LFxuXHRcdC8qKlxuXHRcdCAqICAgIEV2ZW50cy5wdWJsaXNoXG5cdFx0ICogICAgZS5nLjogRXZlbnRzLnB1Ymxpc2goXCIvQXJ0aWNsZS9hZGRlZFwiLCB7YXJ0aWNsZTogYXJ0aWNsZX0sIHRoaXMpO1xuXHRcdCAqXG5cdFx0ICogICAgQGNsYXNzIEV2ZW50c1xuXHRcdCAqICAgIEBtZXRob2QgcHVibGlzaFxuXHRcdCAqICAgIEBwYXJhbSB0b3BpYyB7U3RyaW5nfVxuXHRcdCAqICAgIEBwYXJhbSBhcmdzICAgIHtPYmplY3R9XG5cdFx0ICogICAgQHBhcmFtIHNjb3BlIHtPYmplY3R9IE9wdGlvbmFsXG5cdFx0ICovXG5cdFx0cHVibGlzaCA9IGZ1bmN0aW9uICh0b3BpYywgYXJncywgc2NvcGUpIHtcblx0XHRcdGlmIChjYWNoZVt0b3BpY10pIHtcblx0XHRcdFx0bGV0IHRoaXNUb3BpYyA9IGNhY2hlW3RvcGljXTtcblx0XHRcdFx0bGV0IGkgPSB0aGlzVG9waWMubGVuZ3RoIC0gMTtcblxuXHRcdFx0XHRmb3IgKGk7IGkgPj0gMDsgaSAtPSAxKSB7XG5cdFx0XHRcdFx0dGhpc1RvcGljW2ldLmNhbGwoc2NvcGUgfHwgdGhpcywgYXJncyB8fCB7fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqICAgIEV2ZW50cy5zdWJzY3JpYmVcblx0XHQgKiAgICBlLmcuOiBFdmVudHMuc3Vic2NyaWJlKFwiL0FydGljbGUvYWRkZWRcIiwgQXJ0aWNsZXMudmFsaWRhdGUpXG5cdFx0ICpcblx0XHQgKiAgICBAY2xhc3MgRXZlbnRzXG5cdFx0ICogICAgQG1ldGhvZCBzdWJzY3JpYmVcblx0XHQgKiAgICBAcGFyYW0gdG9waWMge1N0cmluZ31cblx0XHQgKiAgICBAcGFyYW0gY2FsbGJhY2sge0Z1bmN0aW9ufVxuXHRcdCAqICAgIEByZXR1cm4gRXZlbnQgaGFuZGxlciB7QXJyYXl9XG5cdFx0ICovXG5cdFx0c3Vic2NyaWJlID0gZnVuY3Rpb24gKHRvcGljLCBjYWxsYmFjaykge1xuXHRcdFx0bGV0IHRvcGljcyA9IHRvcGljLnNwbGl0KCcgJyk7XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdG9waWNzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCB0b3BpYyA9IHRvcGljc1tpXTtcblxuXHRcdFx0XHRpZiAoIWNhY2hlW3RvcGljXSkge1xuXHRcdFx0XHRcdGNhY2hlW3RvcGljXSA9IFtdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y2FjaGVbdG9waWNdLnB1c2goY2FsbGJhY2spO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiAgICBFdmVudHMudW5zdWJzY3JpYmVcblx0XHQgKiAgICBlLmcuOiB2YXIgaGFuZGxlID0gRXZlbnRzLnN1YnNjcmliZShcIi9BcnRpY2xlL2FkZGVkXCIsIEFydGljbGVzLnZhbGlkYXRlKTtcblx0XHQgKiAgICAgICAgRXZlbnRzLnVuc3Vic2NyaWJlKFwiL0FydGljbGUvYWRkZWRcIiwgQXJ0aWNsZXMudmFsaWRhdGUpO1xuXHRcdCAqXG5cdFx0ICogICAgQGNsYXNzIEV2ZW50c1xuXHRcdCAqICAgIEBtZXRob2QgdW5zdWJzY3JpYmVcblx0XHQgKiAgICBAcGFyYW0gdG9waWMge1N0cmluZ31cblx0XHQgKiAgICBAcGFyYW0gaGFuZGxlIHtGdW5jdGlvbn1cblx0XHQgKiAgICBAcGFyYW0gY29tcGxldGx5IHtCb29sZWFufVxuXHRcdCAqL1xuXHRcdHVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKHRvcGljLCBoYW5kbGUsIGNvbXBsZXRseSA9IGZhbHNlKSB7XG5cdFx0XHRsZXQgaSA9IGNhY2hlW3RvcGljXS5sZW5ndGggLSAxO1xuXG5cdFx0XHRpZiAoY2FjaGVbdG9waWNdKSB7XG5cdFx0XHRcdGZvciAoaTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0XHRpZiAoY2FjaGVbdG9waWNdW2ldID09PSBoYW5kbGUpIHtcblx0XHRcdFx0XHRcdGNhY2hlW3RvcGljXS5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHRpZiAoY29tcGxldGx5KSB7XG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBjYWNoZVt0b3BpY107XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdHB1Ymxpc2g6IHB1Ymxpc2gsXG5cdFx0c3Vic2NyaWJlOiBzdWJzY3JpYmUsXG5cdFx0dW5zdWJzY3JpYmU6IHVuc3Vic2NyaWJlLFxuXHRcdHRyaWdnZXI6IHB1Ymxpc2gsXG5cdFx0b246IHN1YnNjcmliZSxcblx0XHRvZmY6IHVuc3Vic2NyaWJlXG5cdH07XG59KCkpO1xuXG5jb25zdCBWZWFtc1ZlbnQgPSB7XG5cdG9wdGlvbnM6IHtcblx0XHRmdXJ0aGVyRXZlbnRzOiB7fVxuXHR9LFxuXHRwbHVnaW5OYW1lOiAnVmVudCcsXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uIChWZWFtcywgb3B0cykge1xuXG5cdFx0aWYgKCFWZWFtcy4kKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdWZWFtc1ZlbnQgOjogWW91IG5lZWQgdG8gYWRkIGEgRE9NIGhhbmRsZXIgcGx1Z2luIGlmIHlvdSB3YW50IHRvIHVzZSBWZWFtcy5WZW50IScpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChvcHRzKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMgPSBWZWFtcy5oZWxwZXJzLmV4dGVuZCh0aGlzLm9wdGlvbnMsIG9wdHMgfHwge30pO1xuXHRcdH1cblxuXHRcdFZlYW1zLlZlbnQgPSBFdmVudHNIYW5kbGVyO1xuXHRcdFZlYW1zLkVWRU5UUyA9IFZlYW1zLmhlbHBlcnMuZXh0ZW5kKFZlYW1zLkVWRU5UUywgdGhpcy5vcHRpb25zLmZ1cnRoZXJFdmVudHMpO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWZWFtc1ZlbnQ7IiwiLyoqXG4gKiBDb25zdCBmb3IgZXZlbnRzIChwdWIvc3ViKVxuICpcbiAqIEBhdXRob3I6IFNlYmFzdGlhbiBGaXR6bmVyXG4gKi9cblxuLyoqXG4gKiBFdmVudHMgR2xvYmFsXG4gKi9cblxuY29uc3QgRVZFTlRTID0ge307XG5cblxuLy8gQElOU0VSVFBPSU5UIDo6IEByZWY6IGpzLWV2ZW50c1xuXG5leHBvcnQgZGVmYXVsdCBFVkVOVFM7IiwiLy8gR2xvYmFsIGRlcGVuZGVuY2llc1xuaW1wb3J0IHtBcHAsIFZlYW1zfSBmcm9tICcuL2FwcCc7XG5cbmNvbnNvbGUubG9nKCdKUyBpbml0aWFsaXplZCBpbiB2ZXJzaW9uOicsIEFwcC52ZXJzaW9uKTtcbmNvbnNvbGUubG9nKCdWZWFtcyBpbml0aWFsaXplZCBpbiB2ZXJzaW9uOicsIFZlYW1zLmJhc2UudmVyc2lvbik7XG5cbi8vIEltcG9ydHNcblxuLy8gQElOU0VSVFBPSU5UIDo6IEByZWY6IGpzLXNlbGYtY29udGFpbmVkLWltcG9ydCwgQGtlZXA6IHRydWUgLy9cblxuLy8gSW5pdGlhbGl6ZSBtb2R1bGVzIHdpdGggVmVhbXNcblZlYW1zLm1vZHVsZXMucmVnaXN0ZXIoW1xuICAgIC8vIEBJTlNFUlRQT0lOVCA6OiBAcmVmOiBqcy1pbml0LXY1LCBAa2VlcDogdHJ1ZSAvL1xuXSk7XG5cbi8vIEBJTlNFUlRQT0lOVCA6OiBAcmVmOiBqcy1pbml0LW9uY2UtdjUsIEBrZWVwOiB0cnVlIC8vXG4iLCIvLyBHbG9iYWwgZGVwZW5kZW5jaWVzIFxuaW1wb3J0IHsgZGVmYXVsdCBhcyAkIH0gZnJvbSAndmVhbXMtcXVlcnknO1xuaW1wb3J0IFZlYW1zIGZyb20gJ3ZlYW1zJztcbmltcG9ydCBWZWFtc0xvZ2dlciBmcm9tICd2ZWFtcy9zcmMvanMvcGx1Z2lucy9sb2dnZXInO1xuaW1wb3J0IFZlYW1zRE9NIGZyb20gJ3ZlYW1zL3NyYy9qcy9wbHVnaW5zL2RvbSc7XG5pbXBvcnQgVmVhbXNWZW50IGZyb20gJ3ZlYW1zL3NyYy9qcy9wbHVnaW5zL3ZlbnQnO1xuaW1wb3J0IFZlYW1zTW9kdWxlcyBmcm9tICd2ZWFtcy9zcmMvanMvcGx1Z2lucy9tb2R1bGVzJztcbmltcG9ydCBWZWFtc01lZGlhUXVlcnlIYW5kbGVyIGZyb20gJ3ZlYW1zL3NyYy9qcy9wbHVnaW5zL21lZGlhLXF1ZXJ5LWhhbmRsZXInO1xuaW1wb3J0IEVWRU5UUyBmcm9tICcuL2V2ZW50cyc7XG5cblxubGV0IEFwcCA9IHt9O1xuQXBwLiQgPSAkO1xuXG4vLyBWZXJzaW9uaW5nXG5BcHAudmVyc2lvbiA9IFwiMC4wLjFcIjtcblxuLy8gVmVhbXNcblZlYW1zLm9uSW5pdGlhbGl6ZSgoKSA9PiB7XG5cdC8qKlxuXHQqIFZlYW1zIFBsdWdpbnNcblx0Ki9cblxuXHQvLyBEb20gUGx1Z2luXG5cdFZlYW1zLnVzZShWZWFtc0RPTSwge1xuXHRcdERPTTogJFxuXHR9KTtcblxuXHQvLyBWZW50IFBsdWdpblxuXHRWZWFtcy51c2UoVmVhbXNWZW50LCB7XG5cdFx0ZnVydGhlckV2ZW50czogRVZFTlRTXG5cdH0pO1xuXG5cdC8vIExvZ2dlciBQbHVnaW4gZm9yIGRldm1vZGUgYW5kIGxvZ2dlclxuXHRWZWFtcy51c2UoVmVhbXNMb2dnZXIpO1xuXG5cdC8vIE1vZHVsZSBTeXN0ZW0gUGx1Z2luXG5cdFZlYW1zLnVzZShWZWFtc01vZHVsZXMsIHtcblx0XHR1c2VNdXRhdGlvbk9ic2VydmVyOiB0cnVlLFxuXHRcdGludGVybmFsQ2FjaGVPbmx5OiBmYWxzZVxuXHR9KTtcblxuXHQvLyBNZWRpYSBRdWVyeSBIYW5kbGVyIFBsdWdpblxuXHRWZWFtcy51c2UoVmVhbXNNZWRpYVF1ZXJ5SGFuZGxlcik7XG5cbiAgICBjb25zdCBtb2JpbGVCdXR0b25TZWwgPSBcIltkYXRhLWpzLWl0ZW09J21vYmlsZS1idXR0b24nXVwiOyAvLyB0aGlzIGlzIGEgc3RyaW5nIHRvIHNlbGVjdFxuICAgIGNvbnN0ICRtb2JpbGVCdXR0b24gPSAkKG1vYmlsZUJ1dHRvblNlbCk7IC8vIHRoaXMgaXMgYSBKcXVlcnkgZWxlbWVudCwgaGVuY2UgdGhlICQgYXQgdGhlIGJlZ2lubmluZ1xuICAgIGNvbnN0IGhlYWRlck1lbnVMaXN0ID0gXCJbZGF0YS1qcy1pdGVtPSdoZWFkZXItbmF2LWxpc3QnXVwiO1xuICAgIGNvbnN0ICRtZW51TGlzdCA9ICQoaGVhZGVyTWVudUxpc3QpO1xuICAgIGNvbnN0IG9wZW5DbGFzcyA9IFwiaXMtb3BlblwiO1xuXG4gICAgJG1vYmlsZUJ1dHRvbi5vbihcImNsaWNrXCIsIChlLCB0YXJnZXQpID0+IHtcbiAgICBcdGNvbnN0ICR0YXJnZXQgPSAkKHRhcmdldCk7IC8vIGNhY2hlIGVsZW1lbnQgdGhhdCB5b3VsbCBuZWVkIGxhdGVyXG5cblx0XHRpZiAoJHRhcmdldC5oYXNDbGFzcyhvcGVuQ2xhc3MpKSB7XG4gICAgICAgICAgICAkdGFyZ2V0LnJlbW92ZUNsYXNzKG9wZW5DbGFzcyk7XG4gICAgICAgICAgICAkbWVudUxpc3QucmVtb3ZlQ2xhc3Mob3BlbkNsYXNzKTtcblx0XHR9IGVsc2Uge1xuICAgICAgICAgICAgJHRhcmdldC5hZGRDbGFzcyhvcGVuQ2xhc3MpO1xuICAgICAgICAgICAgJG1lbnVMaXN0LmFkZENsYXNzKG9wZW5DbGFzcyk7XG5cdFx0fVxuICAgIH0pO1xuXG59KTtcblxuZXhwb3J0IHtBcHAsIFZlYW1zfTsiXX0=
