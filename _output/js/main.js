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
_veams2.default.use(_mediaQueryHandler2.default);});exports.App=App;exports.Veams=_veams2.default;

},{"./events":7,"veams":1,"veams-query":"veams-query","veams/src/js/plugins/dom":2,"veams/src/js/plugins/logger":3,"veams/src/js/plugins/media-query-handler":4,"veams/src/js/plugins/modules":5,"veams/src/js/plugins/vent":6}]},{},[8])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvdmVhbXMvbGliL3ZlYW1zLmpzIiwibm9kZV9tb2R1bGVzL3ZlYW1zL3NyYy9qcy9wbHVnaW5zL2RvbS5qcyIsIm5vZGVfbW9kdWxlcy92ZWFtcy9zcmMvanMvcGx1Z2lucy9sb2dnZXIuanMiLCJub2RlX21vZHVsZXMvdmVhbXMvc3JjL2pzL3BsdWdpbnMvbWVkaWEtcXVlcnktaGFuZGxlci5qcyIsIm5vZGVfbW9kdWxlcy92ZWFtcy9zcmMvanMvcGx1Z2lucy9tb2R1bGVzLmpzIiwibm9kZV9tb2R1bGVzL3ZlYW1zL3NyYy9qcy9wbHVnaW5zL3ZlbnQuanMiLCJyZXNvdXJjZXMvanMvZXZlbnRzLmpzIiwicmVzb3VyY2VzL2pzL21haW4uanMiLCJyZXNvdXJjZXMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0FBLENBQUMsU0FBUyxnQ0FBVCxDQUEwQyxJQUExQyxFQUFnRCxPQUFoRCxFQUF5RDtBQUN6RCxLQUFHLFFBQU8sT0FBUCwwQ0FBTyxPQUFQLE9BQW1CLFFBQW5CLElBQStCLFFBQU8sTUFBUCwwQ0FBTyxNQUFQLE9BQWtCLFFBQXBELEVBQ0MsT0FBTyxPQUFQLEdBQWlCLFNBQWpCLENBREQsS0FFSyxJQUFHLE9BQU8sTUFBUCxLQUFrQixVQUFsQixJQUFnQyxPQUFPLEdBQTFDLEVBQ0osT0FBTyxPQUFQLEVBQWdCLEVBQWhCLEVBQW9CLE9BQXBCLEVBREksS0FFQSxJQUFHLFFBQU8sT0FBUCwwQ0FBTyxPQUFQLE9BQW1CLFFBQXRCLEVBQ0osUUFBUSxPQUFSLElBQW1CLFNBQW5CLENBREksS0FHSixLQUFLLE9BQUwsSUFBZ0IsS0FBSyxPQUFMLEtBQWlCLEVBQWpDLEVBQXFDLEtBQUssT0FBTCxFQUFjLE9BQWQsSUFBeUIsU0FBOUQ7QUFDRCxDQVRELGFBU1MsWUFBVztBQUNwQixRQUFPLFNBQVUsVUFBUyxPQUFU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LENBQXFCLE1BQU0sTUFBM0IsRUFBbUMsS0FBSyxPQUFMLENBQWEsYUFBaEQsQ0FBZjtBQUNBO0FBbEJnQixDQUFsQjs7a0JBcUJlLFM7Ozs7c0VDaElmOzs7O0dBTUE7O0dBSUEsR0FBTSxRQUFTLEVBQWYsQ0FHQTtnQkFFZSxNOzs7YUNkZiwwQkFFQSxRQUFRLEdBQVIsQ0FBWSw0QkFBWixDQUEwQyxTQUFJLE9BQTlDLEVBSEE7QUFJQSxRQUFRLEdBQVIsQ0FBWSwrQkFBWixDQUE2QyxXQUFNLElBQU4sQ0FBVyxPQUF4RCxFQUVBO0FBRUE7QUFFQTtBQUNBLFdBQU0sT0FBTixDQUFjLFFBQWQsQ0FBdUIsQ0FDbkI7QUFEbUIsQ0FBdkIsRUFJQTs7OzBHQ2RBLHVDLHFEQUNBLDRCLDJDQUNBLG1ELDZDQUNBLDZDLHVDQUNBLCtDLHlDQUNBLHFELCtDQUNBLDJFLG1FQUNBLGdDLGdJQVJBO0FBV0EsR0FBSSxLQUFNLEVBQVYsQ0FDQSxJQUFJLENBQUosc0JBRUE7QUFDQSxJQUFJLE9BQUosQ0FBYyxPQUFkLENBRUE7QUFDQSxnQkFBTSxZQUFOLENBQW1CLFVBQU0sQ0FDeEI7O0dBSUE7QUFDQSxnQkFBTSxHQUFOLGVBQW9CLENBQ25CLHdCQURtQixDQUFwQixFQUlBO0FBQ0EsZ0JBQU0sR0FBTixnQkFBcUIsQ0FDcEIsOEJBRG9CLENBQXJCLEVBSUE7QUFDQSxnQkFBTSxHQUFOLG1CQUVBO0FBQ0EsZ0JBQU0sR0FBTixtQkFBd0IsQ0FDdkIsb0JBQXFCLElBREUsQ0FFdkIsa0JBQW1CLEtBRkksQ0FBeEIsRUFLQTtBQUNBLGdCQUFNLEdBQU4sOEJBQ0EsQ0ExQkQsRSxRQTRCUSxHLENBQUEsRyxTQUFLLEsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ2ZWFtc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ2ZWFtc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ2ZWFtc1wiXSA9IHJvb3RbXCJ2ZWFtc1wiXSB8fCB7fSwgcm9vdFtcInZlYW1zXCJdW1widmVhbXNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdC8qKlxuXHQgKiBJbXBvcnRzXG5cdCAqL1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHR2YXIgX3N0YXJ0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0XG5cdHZhciBfc3RhcnRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGFydGVyKTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cdFxuXHQvKipcblx0ICogVmFyaWFibGVzXG5cdCAqL1xuXG5cdGV4cG9ydHMuZGVmYXVsdCA9IF9zdGFydGVyMi5kZWZhdWx0O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDEgKi8sXG4vKiAyICovLFxuLyogMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdFx0dmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IG1peGluO1xuXHRcblx0dmFyIF9kZWZhdWx0cyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cdFxuXHR2YXIgX2RlZmF1bHRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmF1bHRzKTtcblx0XG5cdHZhciBfbWV0aG9kRXh0ZW5kID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblx0XG5cdHZhciBfbWV0aG9kRXh0ZW5kMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21ldGhvZEV4dGVuZCk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0LyoqXG5cdCAqIE1lcmdlIG1ldGhvZCBmdW5jdGlvbnMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBmcm9tIC0gTWl4aW4gb2JqZWN0IHdoaWNoIHdpbGwgYmUgbWVyZ2VkIHZpYSBIZWxwZXJzLmRlZmF1bHRzIHdpdGggdGhlIG1ldGhvZHMgb2Ygb3VyIGNsYXNzXG5cdCAqIEBwYXJhbSB7QXJyYXl9IG1ldGhvZHMgLSBBcnJheSBvZiBtZXRob2QgbmFtZXMgd2hpY2ggd2lsbCBiZSBleHRlbmRlZC5cblx0ICovXG5cdGZ1bmN0aW9uIG1peGluKGZyb20pIHtcblx0XHR2YXIgbWV0aG9kcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogWydpbml0aWFsaXplJywgJ3JlbmRlciddO1xuXHRcblx0XHRpZiAoZnJvbSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdWZWFtc0hlbHBlcnMgOiBNaXhpbiA6OiBNaXhpbiBub3QgZm91bmQhJyk7XG5cdFxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XG5cdFx0dmFyIHRvID0gdGhpcy5wcm90b3R5cGU7XG5cdFxuXHRcdC8qKiBBZGQgdGhvc2UgbWV0aG9kcyB3aGljaCBleGlzdHMgb24gYGZyb21gIGJ1dCBub3Qgb24gYHRvYCB0byB0aGUgbGF0dGVyICovXG5cdFx0KDAsIF9kZWZhdWx0czIuZGVmYXVsdCkodG8sIGZyb20pO1xuXHRcblx0XHQvKiogd2UgZG8gdGhlIHNhbWUgZm9yIGV2ZW50cyAqL1xuXHRcdGlmICh0by5ldmVudHMpIHtcblx0XHRcdCgwLCBfZGVmYXVsdHMyLmRlZmF1bHQpKHRvLmV2ZW50cywgZnJvbS5ldmVudHMpO1xuXHRcdH1cblx0XG5cdFx0Ly8gRXh0ZW5kIHRvJ3MgbWV0aG9kc1xuXHRcdG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG5cdFx0XHQoMCwgX21ldGhvZEV4dGVuZDIuZGVmYXVsdCkodG8sIGZyb20sIG1ldGhvZCk7XG5cdFx0fSk7XG5cdH07XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0LyoqXG5cdCAqIFNpbXBsZSBleHRlbmQgbWV0aG9kLCB3aGljaCBleHRlbmRzIGFuIG9iamVjdC5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIG9iamVjdCB3aGljaCB3aWxsIGJlIGV4dGVuZGVkXG5cdCAqXG5cdCAqIEByZXR1cm4ge09iamVjdH0gb2JqIC0gZXh0ZW5kZWQgb2JqZWN0XG5cdCAqL1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRzSGVscGVyO1xuXHRmdW5jdGlvbiBkZWZhdWx0c0hlbHBlcihvYmopIHtcblx0ICBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuXHQgICAgZm9yICh2YXIga2V5IGluIGl0ZW0pIHtcblx0ICAgICAgaWYgKG9ialtrZXldID09PSB1bmRlZmluZWQpIG9ialtrZXldID0gaXRlbVtrZXldO1xuXHQgICAgfVxuXHQgIH0pO1xuXHQgIHJldHVybiBvYmo7XG5cdH07XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0LyoqXG5cdCAqIEhlbHBlciBtZXRob2QgdG8gZXh0ZW5kIGFuIGFscmVhZHkgZXhpc3RpbmcgbWV0aG9kLlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gdG8gLSB2aWV3IHdoaWNoIHdpbGwgYmUgZXh0ZW5kZWRcblx0ICogQHBhcmFtIHtPYmplY3R9IGZyb20gLSBtZXRob2RzIHdoaWNoIGNvbWVzIGZyb20gbWl4aW5cblx0ICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWUgLSBmdW5jdGlvbiBuYW1lXG5cdCAqL1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdFx0dmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IG1ldGhvZEV4dGVuZDtcblx0ZnVuY3Rpb24gbWV0aG9kRXh0ZW5kKHRvLCBmcm9tLCBtZXRob2ROYW1lKSB7XG5cdFx0ZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcblx0XHRcdHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xuXHRcdH1cblx0XG5cdFx0aWYgKGZyb20gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXHRcblx0XHQvLyBpZiB0aGUgbWV0aG9kIGlzIGRlZmluZWQgb24gZnJvbSAuLi5cblx0XHRpZiAoIWlzVW5kZWZpbmVkKGZyb21bbWV0aG9kTmFtZV0pKSB7XG5cdFx0XHR2YXIgb2xkID0gdG9bbWV0aG9kTmFtZV07XG5cdFxuXHRcdFx0Ly8gLi4uIHdlIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvbiB0b1xuXHRcdFx0dG9bbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG5cdFxuXHRcdFx0XHQvLyB3aGVyZWluIHdlIGZpcnN0IGNhbGwgdGhlIG1ldGhvZCB3aGljaCBleGlzdHMgb24gYHRvYFxuXHRcdFx0XHR2YXIgb2xkUmV0dXJuID0gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFxuXHRcdFx0XHQvLyBhbmQgdGhlbiBjYWxsIHRoZSBtZXRob2Qgb24gYGZyb21gXG5cdFx0XHRcdGZyb21bbWV0aG9kTmFtZV0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XG5cdFx0XHRcdC8vIGFuZCB0aGVuIHJldHVybiB0aGUgZXhwZWN0ZWQgcmVzdWx0LFxuXHRcdFx0XHQvLyBpLmUuIHdoYXQgdGhlIG1ldGhvZCBvbiBgdG9gIHJldHVybnNcblx0XHRcdFx0cmV0dXJuIG9sZFJldHVybjtcblx0XHRcdH07XG5cdFx0fVxuXHR9O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdC8qKlxuXHQgKiBTaW1wbGUgZXh0ZW5kIG1ldGhvZCB0byBleHRlbmQgdGhlIHByb3BlcnRpZXMgb2YgYW4gb2JqZWN0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gb2JqZWN0IHdoaWNoIHdpbGwgYmUgZXh0ZW5kZWRcblx0ICpcblx0ICogQHJldHVybiB7T2JqZWN0fSBvYmogLSBleHRlbmRlZCBvYmplY3Rcblx0ICovXG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0ZXhwb3J0cy5kZWZhdWx0ID0gZXh0ZW5kO1xuXHRmdW5jdGlvbiBleHRlbmQob2JqKSB7XG5cdCAgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcblx0ICAgIGZvciAodmFyIGtleSBpbiBpdGVtKSB7XG5cdCAgICAgIG9ialtrZXldID0gaXRlbVtrZXldO1xuXHQgICAgfVxuXHQgIH0pO1xuXHQgIHJldHVybiBvYmo7XG5cdH07XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0LyoqXG5cdCAqIEdlbmVyYXRlcyBudW1lcmljIGlkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge051bWJlcn0gW3NlZ21lbnRzPTFdIC0gbnVtYmVyIG9mIHNlZ21lbnRzIG9mIGdlbmVyYXRlZCBpZCAoc2VnbWVudHMgY29uc2lzdCBvZiAxMCBkaWdpdHMsIHNlcGFyYXRlZCBieSAnLScpLlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9IC0gZ2VuZXJhdGVkIGlkXG5cdCAqL1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdFx0dmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IG1ha2VJZDtcblx0ZnVuY3Rpb24gbWFrZUlkKCkge1xuXHRcdHZhciBzZWdtZW50cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMTtcblx0XG5cdFx0dmFyIGNyeXB0byA9IHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvO1xuXHRcdHZhciBhcnJheSA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQzMkFycmF5KHNlZ21lbnRzKSk7XG5cdFx0dmFyIGlkID0gJyc7XG5cdFx0dmFyIGkgPSAwO1xuXHRcblx0XHRmb3IgKDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZCArPSBhcnJheVtpXSArICctJztcblx0XHR9XG5cdFxuXHRcdHJldHVybiBpZC5zbGljZSgwLCAtMSk7XG5cdH07XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogOCAqLyxcbi8qIDkgKi8sXG4vKiAxMCAqLyxcbi8qIDExICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcblx0ICogUG9seWZpbGxzXG5cdCAqL1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdFx0dmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcblx0XG5cdHZhciBfY29yZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xuXHRcblx0dmFyIF9jb3JlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvcmUpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblx0XG5cdHZhciBWZWFtcyA9IHt9O1xuXHRcblx0LyoqXG5cdCAqIEltcG9ydHNcblx0ICovXG5cdFxuXHRcblx0KGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblx0XHQndXNlIHN0cmljdCc7XG5cdFxuXHRcdFZlYW1zID0gbmV3IF9jb3JlMi5kZWZhdWx0KHtcblx0XHRcdG5hbWVzcGFjZTogJ1ZlYW1zJyxcblx0XHRcdGFkZFRvR2xvYmFsOiB0cnVlXG5cdFx0fSk7XG5cdFxuXHRcdFZlYW1zLmluaXRpYWxpemUoKTtcblx0fSkod2luZG93LCBkb2N1bWVudCk7XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBWZWFtcztcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAxMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0Ly8gUG9seWZpbGwgZm9yIGN1c3RvbSBldmVudHNcblx0KGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZhbHNlO1xuXHRcblx0XHRmdW5jdGlvbiBDdXN0b21FdmVudChldmVudCwgcGFyYW1zKSB7XG5cdFx0XHR2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG5cdFxuXHRcdFx0cGFyYW1zID0gcGFyYW1zIHx8IHsgYnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlLCBkZXRhaWw6IHVuZGVmaW5lZCB9O1xuXHRcblx0XHRcdGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XG5cdFx0XHRyZXR1cm4gZXZ0O1xuXHRcdH1cblx0XG5cdFx0Q3VzdG9tRXZlbnQucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZTtcblx0XG5cdFx0d2luZG93LkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnQ7XG5cdH0pKCk7XG5cbi8qKiovIH0sXG4vKiAxMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdFx0dmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpOyAvKipcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFJlcHJlc2VudHMgVmVhbXNDb3JlLlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQG1vZHVsZSBWZWFtc0NvcmVcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAYXV0aG9yIFNlYmFzdGlhbiBGaXR6bmVyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblx0XG5cdFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcblx0XG5cdHZhciBfdXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5cdFxuXHR2YXIgX3VzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91c2UpO1xuXHRcblx0dmFyIF9ldmVudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcblx0XG5cdHZhciBfZXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2ZW50cyk7XG5cdFxuXHR2YXIgX2hlbHBlcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcblx0XG5cdHZhciBfaGVscGVyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzKTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXHRcblx0dmFyIGluaXRTdGF0ZSA9IGZhbHNlO1xuXHRcblx0dmFyIFZlYW1zQ29yZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRmdW5jdGlvbiBWZWFtc0NvcmUob3B0cykge1xuXHRcdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZlYW1zQ29yZSk7XG5cdFxuXHRcdFx0dGhpcy5fb3B0aW9ucyA9IHtcblx0XHRcdFx0bmFtZXNwYWNlOiAnVmVhbXMnLFxuXHRcdFx0XHRhZGRUb0dsb2JhbDogZmFsc2Vcblx0XHRcdH07XG5cdFxuXHRcdFx0dGhpcy5iYXNlID0ge1xuXHRcdFx0XHRuYW1lOiAnVmVhbXMnLFxuXHRcdFx0XHR2ZXJzaW9uOiAnNS4wLjAtcmMxOSdcblx0XHRcdH07XG5cdFxuXHRcdFx0dGhpcy51c2UgPSBfdXNlMi5kZWZhdWx0LmJpbmQodGhpcyk7XG5cdFx0XHR0aGlzLlBsdWdpbnMgPSB7fTtcblx0XHRcdHRoaXMuRVZFTlRTID0gX2V2ZW50czIuZGVmYXVsdDtcblx0XHRcdHRoaXMuaGVscGVycyA9IHt9O1xuXHRcdFx0dGhpcy5kZXRlY3Rpb25zID0ge1xuXHRcdFx0XHR3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG5cdFx0XHRcdGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0XG5cdFx0XHR9O1xuXHRcblx0XHRcdGluaXRTdGF0ZSA9IGZhbHNlO1xuXHRcblx0XHRcdHRoaXMuc2V0dXAob3B0cyk7XG5cdFx0fVxuXHRcblx0XHRfY3JlYXRlQ2xhc3MoVmVhbXNDb3JlLCBbe1xuXHRcdFx0a2V5OiAnc2V0dXAnLFxuXHRcdFx0dmFsdWU6IGZ1bmN0aW9uIHNldHVwKG9wdHMpIHtcblx0XHRcdFx0dGhpcy51c2UoX2hlbHBlcnMyLmRlZmF1bHQpO1xuXHRcblx0XHRcdFx0dGhpcy5kZXRlY3Rpb25zID0gdGhpcy5oZWxwZXJzLmV4dGVuZCh7XG5cdFx0XHRcdFx0dG91Y2g6IHRoaXMuaGVscGVycy5pc1RvdWNoKClcblx0XHRcdFx0fSwgdGhpcy5kZXRlY3Rpb25zKTtcblx0XG5cdFx0XHRcdHRoaXMub3B0aW9ucyA9IG9wdHM7XG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0a2V5OiAnaW5pdGlhbGl6ZScsXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gaW5pdGlhbGl6ZShvcHRzKSB7XG5cdFx0XHRcdGlmIChpbml0U3RhdGUgPT09IHRydWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gY29uc29sZS5pbmZvKCdWZWFtcyA6OiBZb3UgYWxyZWFkeSBpbml0aWFsaXplZCBWZWFtcyEnKTtcblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0LyoqXG5cdCAgICAqIFNldCBnbG9iYWwgb3B0aW9ucyBvbiBpbml0aWFsaXplXG5cdCAgICAqL1xuXHRcdFx0XHR0aGlzLm9wdGlvbnMgPSBvcHRzO1xuXHRcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5hZGRUb0dsb2JhbCkge1xuXHRcdFx0XHRcdGlmICh3aW5kb3cgJiYgIXdpbmRvd1t0aGlzLm9wdGlvbnMubmFtZXNwYWNlXSkge1xuXHRcdFx0XHRcdFx0d2luZG93W3RoaXMub3B0aW9ucy5uYW1lc3BhY2VdID0gdGhpcyB8fCB7fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XG5cdFx0XHRcdGluaXRTdGF0ZSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0a2V5OiAnb25Jbml0aWFsaXplJyxcblx0XHRcdHZhbHVlOiBmdW5jdGlvbiBvbkluaXRpYWxpemUoY2IpIHtcblx0XHRcdFx0aWYgKCFjYiB8fCB0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnVmVhbXMgOjogQ2FsbGJhY2sgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRpZiAoaW5pdFN0YXRlID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRjYigpO1xuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGtleTogJ29uRE9NUmVhZHknLFxuXHRcdFx0dmFsdWU6IGZ1bmN0aW9uIG9uRE9NUmVhZHkoY2IpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdWZWFtcyA6OiBDYWxsYmFjayBpcyBub3QgYSBmdW5jdGlvbiEnKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNiKTtcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRrZXk6ICd2ZXJzaW9uJyxcblx0XHRcdHNldDogZnVuY3Rpb24gc2V0KHZlcnNpb24pIHtcblx0XHRcdFx0dGhpcy5fdmVyc2lvbiA9IHZlcnNpb247XG5cdFx0XHR9LFxuXHRcdFx0Z2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl92ZXJzaW9uO1xuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGtleTogJ2luaXRpYWxpemVkJyxcblx0XHRcdHNldDogZnVuY3Rpb24gc2V0KGJvb2wpIHtcblx0XHRcdFx0dGhpcy5faW5pdGlhbGl6ZWQgPSBib29sO1xuXHRcdFx0fSxcblx0XHRcdGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5faW5pdGlhbGl6ZWQ7XG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0a2V5OiAnb3B0aW9ucycsXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uIHNldChvcHRpb25zKSB7XG5cdFx0XHRcdHRoaXMuX29wdGlvbnMgPSB0aGlzLmhlbHBlcnMuZXh0ZW5kKHRoaXMub3B0aW9ucywgb3B0aW9ucyB8fCB7fSk7XG5cdFx0XHR9LFxuXHRcdFx0Z2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9vcHRpb25zO1xuXHRcdFx0fVxuXHRcdH1dKTtcblx0XG5cdFx0cmV0dXJuIFZlYW1zQ29yZTtcblx0fSgpO1xuXHRcblx0ZXhwb3J0cy5kZWZhdWx0ID0gVmVhbXNDb3JlO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDE0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcblx0ICogUmVwcmVzZW50cyBhIHNpbXBsZSBwbHVnaW4gc3lzdGVtIGluIHdoaWNoIGB0aGlzYCBpcyBWZWFtcy5cblx0ICogQG1vZHVsZSBwbHVnaW5cblx0ICpcblx0ICogQGF1dGhvciBTZWJhc3RpYW4gRml0em5lclxuXHQgKi9cblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0ZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHBsdWdpbikge1xuXHQgIGlmIChwbHVnaW4ucGx1Z2luTmFtZSkge1xuXHQgICAgdGhpcy5QbHVnaW5zW3BsdWdpbi5wbHVnaW5OYW1lXSA9IHBsdWdpbjtcblx0ICB9XG5cdFxuXHQgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuXHQgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG5cdCAgfVxuXHRcblx0ICBwbHVnaW4uaW5pdGlhbGl6ZS5hcHBseShwbHVnaW4sIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAxNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0LyoqXG5cdCAqIENvbnN0IGZvciBldmVudHMgKHB1Yi9zdWIpXG5cdCAqXG5cdCAqIEBhdXRob3I6IFNlYmFzdGlhbiBGaXR6bmVyXG5cdCAqL1xuXHRcblx0LyoqXG5cdCAqIEV2ZW50cyBHbG9iYWxcblx0ICovXG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0XHR2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0dmFyIEVWRU5UUyA9IHtcblx0XHRibHVyOiAnYmx1cicsXG5cdFx0Y2hhbmdlOiAnY2hhbmdlJyxcblx0XHRjbGljazogJ2NsaWNrJyxcblx0XHRkYmxjbGljazogJ2RibGNsaWNrJyxcblx0XHRET01jaGFuZ2VkOiAnZG9tOmNoYW5nZWQnLFxuXHRcdERPTXJlZGlyZWN0OiAnZG9tOnJlZGlyZWN0Jyxcblx0XHRoYXNoY2hhbmdlOiAnaGFzaGNoYW5nZScsXG5cdFx0aW5wdXQ6ICdpbnB1dCcsXG5cdFx0a2V5ZG93bjogJ2tleWRvd24nLFxuXHRcdGtleXByZXNzOiAna2V5cHJlc3MnLFxuXHRcdGtleXVwOiAna2V5dXAnLFxuXHRcdG1lZGlhY2hhbmdlOiAnbWVkaWFjaGFuZ2UnLFxuXHRcdG1vZHVsZUNhY2hlZDogJ21vZHVsZTpjYWNoZWQnLFxuXHRcdG1vdXNlZG93bjogJ21vdXNlZG93bicsXG5cdFx0bW91c2VlbnRlcjogJ21vdXNlZW50ZXInLFxuXHRcdG1vdXNlbGVhdmU6ICdtb3VzZWxlYXZlJyxcblx0XHRtb3VzZW91dDogJ21vdXNlb3V0Jyxcblx0XHRtb3VzZW92ZXI6ICdtb3VzZW92ZXInLFxuXHRcdG1vdXNldXA6ICdtb3VzZXVwJyxcblx0XHRyZXNldDogJ3Jlc2V0Jyxcblx0XHRyZXNpemU6ICdyZXNpemUnLFxuXHRcdHNjcm9sbDogJ3Njcm9sbCcsXG5cdFx0c3VibWl0OiAnc3VibWl0Jyxcblx0XHRzd2lwZTogJ3N3aXBlJ1xuXHR9O1xuXHRcblx0ZXhwb3J0cy5kZWZhdWx0ID0gRVZFTlRTO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDE2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0XHR2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblx0XG5cdHZhciBfZXh0ZW5kID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblx0XG5cdHZhciBfZXh0ZW5kMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZCk7XG5cdFxuXHR2YXIgX21peGluID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0XG5cdHZhciBfbWl4aW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWl4aW4pO1xuXHRcblx0dmFyIF9tZXRob2RFeHRlbmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXHRcblx0dmFyIF9tZXRob2RFeHRlbmQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWV0aG9kRXh0ZW5kKTtcblx0XG5cdHZhciBfaXNUb3VjaCA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpO1xuXHRcblx0dmFyIF9pc1RvdWNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzVG91Y2gpO1xuXHRcblx0dmFyIF90aHJvdHRsZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpO1xuXHRcblx0dmFyIF90aHJvdHRsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aHJvdHRsZSk7XG5cdFxuXHR2YXIgX3F1ZXJ5U2VsZWN0b3JBcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xuXHRcblx0dmFyIF9xdWVyeVNlbGVjdG9yQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcXVlcnlTZWxlY3RvckFycmF5KTtcblx0XG5cdHZhciBfZm9yRWFjaCA9IF9fd2VicGFja19yZXF1aXJlX18oMjApO1xuXHRcblx0dmFyIF9mb3JFYWNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZvckVhY2gpO1xuXHRcblx0dmFyIF9tYWtlSWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXHRcblx0dmFyIF9tYWtlSWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFrZUlkKTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cdFxuXHR2YXIgVmVhbXNIZWxwZXJzID0ge1xuXHRcdHBsdWdpbk5hbWU6ICdIZWxwZXJzJyxcblx0XHRpbml0aWFsaXplOiBmdW5jdGlvbiBpbml0aWFsaXplKFZlYW1zKSB7XG5cdFx0XHRWZWFtcy5hZGRIZWxwZXIgPSBmdW5jdGlvbiBhZGRIZWxwZXIoKSB7XG5cdFx0XHRcdGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG5cdFx0XHRcdFx0YXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0dmFyIHBhcmFtcyA9IFtdLmNvbmNhdChhcmdzKTtcblx0XG5cdFx0XHRcdGlmIChwYXJhbXMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0aWYgKF90eXBlb2YocGFyYW1zWzBdKSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1ZlYW1zSGVscGVycyA6OiBZb3UgbmVlZCB0byBwYXNzIGFuIG9iamVjdCEnKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBwYXJhbXNbMF0pIHtcblx0XHRcdFx0XHRcdGlmIChwYXJhbXNbMF0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIVZlYW1zLmhlbHBlcnNba2V5XSkge1xuXHRcdFx0XHRcdFx0XHRcdFZlYW1zLmhlbHBlcnNba2V5XSA9IHBhcmFtc1swXVtrZXldO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuaW5mbygnVmVhbXNIZWxwZXJzIDo6IFRoZSBoZWxwZXIgJyArIGtleSArICcgaXMgYWxyZWFkeSBkZWZpbmVkISBQbGVhc2UgZGVmaW5lIGEgbmV3IG5hbWUgZm9yOiAnLCBwYXJhbXNbMF1ba2V5XSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMikge1xuXHRcblx0XHRcdFx0XHRpZiAoIVZlYW1zLmhlbHBlcnNbcGFyYW1zWzBdXSkge1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBwYXJhbXNbMF0gIT09ICdzdHJpbmcnIHx8IHR5cGVvZiBwYXJhbXNbMV0gIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignVmVhbXNIZWxwZXJzIDo6IFlvdSBuZWVkIHRvIHBhc3MgYSBzdHJpbmcgYXMgZmlyc3QgYXJndW1lbnQgYW5kIHRoZSBoZWxwZXIgZnVuY3Rpb24gYXMgc2Vjb25kIG9uZS4nKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0VmVhbXMuaGVscGVyc1twYXJhbXNbMF1dID0gcGFyYW1zWzFdO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmluZm8oJ1ZlYW1zSGVscGVycyA6OiBUaGUgaGVscGVyICcgKyBwYXJhbXNbMF0gKyAnIGlzIGFscmVhZHkgZGVmaW5lZCEgUGxlYXNlIGRlZmluZSBhIG5ldyBuYW1lIGZvcjogJywgcGFyYW1zWzFdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFxuXHRcdFx0dGhpcy5hZGREZWZhdWx0SGVscGVycyhWZWFtcyk7XG5cdFx0fSxcblx0XG5cdFx0YWRkRGVmYXVsdEhlbHBlcnM6IGZ1bmN0aW9uIGFkZERlZmF1bHRIZWxwZXJzKFZlYW1zKSB7XG5cdFx0XHRWZWFtcy5hZGRIZWxwZXIoJ3F1ZXJ5U2VsZWN0b3JBcnJheScsIF9xdWVyeVNlbGVjdG9yQXJyYXkyLmRlZmF1bHQpO1xuXHRcdFx0VmVhbXMuYWRkSGVscGVyKCdleHRlbmQnLCBfZXh0ZW5kMi5kZWZhdWx0KTtcblx0XHRcdFZlYW1zLmFkZEhlbHBlcignaXNUb3VjaCcsIF9pc1RvdWNoMi5kZWZhdWx0KTtcblx0XHRcdFZlYW1zLmFkZEhlbHBlcignbWl4aW4nLCBfbWl4aW4yLmRlZmF1bHQpO1xuXHRcdFx0VmVhbXMuYWRkSGVscGVyKCdtZXRob2RFeHRlbmQnLCBfbWV0aG9kRXh0ZW5kMi5kZWZhdWx0KTtcblx0XHRcdFZlYW1zLmFkZEhlbHBlcigndGhyb3R0bGUnLCBfdGhyb3R0bGUyLmRlZmF1bHQpO1xuXHRcdFx0VmVhbXMuYWRkSGVscGVyKCdmb3JFYWNoJywgX2ZvckVhY2gyLmRlZmF1bHQpO1xuXHRcdFx0VmVhbXMuYWRkSGVscGVyKCdtYWtlSWQnLCBfbWFrZUlkMi5kZWZhdWx0KTtcblx0XHR9XG5cdH07XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSBWZWFtc0hlbHBlcnM7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdC8qKlxuXHQgKiBUb3VjaCBEZXRlY3Rpb25cblx0ICovXG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0ZXhwb3J0cy5kZWZhdWx0ID0gaXNUb3VjaDtcblx0ZnVuY3Rpb24gaXNUb3VjaCgpIHtcblx0ICByZXR1cm4gJ29udG91Y2hzdGFydCcgaW4gd2luZG93O1xuXHR9O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDE4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcblx0ICogVGhyb3R0bGUgbWV0aG9kIGZvciByZXNpemUgZXZlbnRzIGFuZCBtb3JlXG5cdCAqXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgLSBGdW5jdGlvbiB3aGljaCB3aWxsIGJlIGV4ZWN1dGVkLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gd2FpdCAtIG51bWJlciB0byB3YWl0IGluIG1pbGxpc2Vjb25kcy5cblx0ICogQHBhcmFtIHtib29sZWFufSBpbW1lZGlhdGUgLSBleGVjdXRlIGZ1bmN0aW9uIGltbWVkaWF0ZWx5LlxuXHQgKi9cblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHRcdHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzLmRlZmF1bHQgPSB0aHJvdHRsZTtcblx0ZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG5cdFx0dmFyIHRpbWVvdXQgPSB2b2lkIDA7XG5cdFxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgY29udGV4dCA9IHRoaXM7XG5cdFx0XHR2YXIgYXJncyA9IGFyZ3VtZW50cztcblx0XHRcdHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuXHRcdFx0dmFyIGxhdGVyID0gZnVuY3Rpb24gbGF0ZXIoKSB7XG5cdFx0XHRcdHRpbWVvdXQgPSBudWxsO1xuXHRcdFx0XHRpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHRcdH07XG5cdFxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcblx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblx0XG5cdFx0XHRpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHR9O1xuXHR9O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDE5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHQvKipcblx0ICogR2V0IGRvbSBlbGVtZW50cyBpbiBhbiBhcnJheVxuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZWxlbSAtIFJlcXVpcmVkOiBzZWxlY3RvclxuXHQgKiBAcGFyYW0ge09iamVjdH0gW2NvbnRleHRdIC0gT3B0aW9uYWw6IGNvbnRleHRcblx0ICpcblx0ICogQHJldHVybiB7QXJyYXl9XG5cdCAqL1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IHF1ZXJ5U2VsZWN0b3JBcnJheTtcblx0ZnVuY3Rpb24gcXVlcnlTZWxlY3RvckFycmF5KGVsZW0sIGNvbnRleHQpIHtcblx0ICBpZiAoIWVsZW0pIHRocm93IG5ldyBFcnJvcignSW4gb3JkZXIgdG8gd29yayB3aXRoIHF1ZXJ5U2VsZWN0b3JBcnJheSB5b3UgbmVlZCB0byBkZWZpbmUgYW4gZWxlbWVudCBhcyBzdHJpbmchJyk7XG5cdCAgdmFyIGVsID0gZWxlbTtcblx0ICB2YXIgY3VzdG9tQ29udGV4dCA9IGNvbnRleHQgfHwgZG9jdW1lbnQ7XG5cdFxuXHQgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjdXN0b21Db250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoZWwpKTtcblx0fTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAyMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0LyoqXG5cdCAqIFNpbXBsZSBmb3JFYWNoIG1ldGhvZFxuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIGFycmF5IG9mIG9iamVjdHNcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBjYWxsYmFjayBmdW5jdGlvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc2NvcGUgLSBzY29wZSBvZiBmdW5jdGlvblxuXHQgKi9cblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzLmRlZmF1bHQgPSBmb3JFYWNoO1xuXHRmdW5jdGlvbiBmb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgc2NvcGUpIHtcblx0ICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdCAgICBjYWxsYmFjay5jYWxsKHNjb3BlLCBpLCBhcnJheVtpXSk7XG5cdCAgfVxuXHR9O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfVxuLyoqKioqKi8gXSlcbn0pO1xuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmVhbXMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWZWFtc0RPTSA9IHtcblx0b3B0aW9uczoge1xuXHRcdERPTTogZmFsc2Vcblx0fSxcblx0cGx1Z2luTmFtZTogJyQnLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbiAoVmVhbXMsIHsgRE9NIH0pIHtcblx0XHRpZiAoIURPTSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcignVmVhbXNET00gOjogWW91IG5lZWQgdG8gcGFzcyBhbiBvcHRpb25zIG9iamVjdCB3aXRoIGEgRE9NIGhhbmRsZXI6IG9wdGlvbnMuRE9NIScpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoVmVhbXMuJCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ1ZlYW1zRE9NIDo6IEl0IHNlZW1zIHRoYXQgeW91IGhhdmUgYWxyZWFkeSBkZWZpbmVkIGEgRE9NIGhhbmRsZXIuIEkgYW0gb3ZlcndyaXRpbmcgaXQgbm93IGZvciB5b3UgOyknKTtcblx0XHR9XG5cblx0XHRWZWFtcy4kID0gdGhpcy5vcHRpb25zLkRPTSA9IERPTTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmVhbXNET007IiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWZWFtc0xvZ2dlciA9IHtcblx0cGx1Z2luTmFtZTogJ0xvZ2dlcicsXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uIChWZWFtcykge1xuXHRcdC8qKlxuXHRcdCAqIERldm1vZGUgYW5kIGxvZ2dlclxuXHRcdCAqL1xuXHRcdFZlYW1zLmRldm1vZGUgPSBmYWxzZTtcblx0XHRWZWFtcy5sb2dnZXIgPSBmYWxzZTtcblxuXHRcdGlmIChkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2guaW5kZXhPZignZGV2bW9kZScpID4gLTEpIHtcblx0XHRcdFZlYW1zLmRldm1vZGUgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2guaW5kZXhPZignbG9nZ2VyJykgPiAtMSkge1xuXHRcdFx0VmVhbXMubG9nZ2VyID0gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBoaWRlIGFsbCB3YXJuaW5ncyBhbmQgbG9ncyBpZiBub3QgaW4gZGV2bW9kZVxuXHRcdGlmICghVmVhbXMuZGV2bW9kZSkge1xuXHRcdFx0Y29uc29sZS5sb2cgPSBjb25zb2xlLndhcm4gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8vIGFkZCBjb25zb2xlIG91dHB1dCBlbGVtZW50ICh0cmlnZ2VyZWQgYnkgcGFyYW1ldGVyICdkZXZtb2RlJyBhbmQgJ2xvZ2dlcicgaW4gdXJsKVxuXHRcdGlmIChWZWFtcy5kZXZtb2RlICYmIFZlYW1zLmxvZ2dlcikge1xuXHRcdFx0bGV0IGxvZ2dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuXG5cdFx0XHRsb2dnZXIuc2V0QXR0cmlidXRlKCdpZCcsICdsb2dnZXInKTtcblx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9nZ2VyKTtcblxuXHRcdFx0Y29uc29sZS53cml0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHRcdGxvZ2dlci5pbm5lckhUTUwgKz0gKEpTT04gJiYgSlNPTi5zdHJpbmdpZnkgPyBKU09OLnN0cmluZ2lmeShhcmd1bWVudHNbaV0sIHVuZGVmaW5lZCwgMikgOiBhcmd1bWVudHNbaV0pICsgJzxiciAvPic7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxvZ2dlci5pbm5lckhUTUwgKz0gYXJndW1lbnRzW2ldICsgJzxiciAvPic7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bG9nZ2VyLmlubmVySFRNTCArPSAnPGJyIC8+Jztcblx0XHRcdFx0bG9nZ2VyLnNjcm9sbFRvcCA9IGxvZ2dlci5zY3JvbGxIZWlnaHQ7XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zb2xlLmVycm9yID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRsb2dnZXIuaW5uZXJIVE1MICs9ICdbRXJyb3JdPGJyIC8+Jztcblx0XHRcdFx0Y29uc29sZS53cml0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0fTtcblxuXHRcdFx0Y29uc29sZS53YXJuID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRsb2dnZXIuaW5uZXJIVE1MICs9ICdbV2Fybl08YnIgLz4nO1xuXHRcdFx0XHRjb25zb2xlLndyaXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zb2xlLmxvZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0bG9nZ2VyLmlubmVySFRNTCArPSAnW0xvZ108YnIgLz4nO1xuXHRcdFx0XHRjb25zb2xlLndyaXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmVhbXNMb2dnZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEltcG9ydHNcbiAqL1xuY29uc3QgVmVhbXNNZWRpYVF1ZXJ5SGFuZGxlciA9IHtcblx0b3B0aW9uczoge1xuXHRcdG1lZGlhUXVlcnlQcm9wOiAnZm9udC1mYW1pbHknLFxuXHRcdGRlbGF5OiAzMDBcblx0fSxcblx0cGx1Z2luTmFtZTogJ01lZGlhUXVlcnlIYW5kbGVyJyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24gKFZlYW1zLCBvcHRzKSB7XG5cdFx0Ly8gTWVkaWEgUXVlcnlcblx0XHRsZXQgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2hlYWQnKTtcblxuXHRcdGlmIChvcHRzKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMgPSBWZWFtcy5oZWxwZXJzLmV4dGVuZCh0aGlzLm9wdGlvbnMsIG9wdHMgfHwge30pO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEFkZCBjdXJyZW50IG1lZGlhIHF1ZXJ5IHRvIFZlYW1zXG5cdFx0ICovXG5cdFx0VmVhbXMuY3VycmVudE1lZGlhID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoaGVhZFswXSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSh0aGlzLm9wdGlvbnMubWVkaWFRdWVyeVByb3ApO1xuXG5cdFx0aWYgKCFWZWFtcy5WZW50KSB7XG5cdFx0XHRjb25zb2xlLmluZm8oJ1ZlYW1zTWVkaWFRdWVyeUhhbmRsZXIgOjogSW4gb3JkZXIgdG8gd29yayBwcm9wZXJseSB3aXRoIHRoZSBWZWFtc01lZGlhUXVlcnlIYW5kbGVyIHBsdWdpbiB5b3Ugc2hvdWxkIGFkZCB0aGUgVmVhbXNWZW50IHBsdWdpbiEnKTtcblx0XHR9XG5cblx0XHQvLyBUcmlnZ2VyIGdsb2JhbCByZXNpemUgZXZlbnRcblx0XHR3aW5kb3cub25yZXNpemUgPSBWZWFtcy5oZWxwZXJzLnRocm90dGxlKChlKSA9PiB7XG5cdFx0XHRsZXQgY3VycmVudE1lZGlhID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoaGVhZFswXSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSh0aGlzLm9wdGlvbnMubWVkaWFRdWVyeVByb3ApO1xuXHRcdFx0bGV0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cblx0XHRcdGlmIChjdXJyZW50TWVkaWEgIT09IFZlYW1zLmN1cnJlbnRNZWRpYSkge1xuXHRcdFx0XHRsZXQgb2xkTWVkaWEgPSBWZWFtcy5jdXJyZW50TWVkaWE7XG5cblx0XHRcdFx0VmVhbXMuY3VycmVudE1lZGlhID0gY3VycmVudE1lZGlhO1xuXG5cdFx0XHRcdGNvbnNvbGUuaW5mbyhgVmVhbXNNZWRpYVF1ZXJ5SGFuZGxlciA6OiBDdXJyZW50IG1lZGlhIGlzICR7VmVhbXMuY3VycmVudE1lZGlhfWApO1xuXG5cdFx0XHRcdGlmIChWZWFtcy5WZW50KSB7XG5cdFx0XHRcdFx0VmVhbXMuVmVudC50cmlnZ2VyKFZlYW1zLkVWRU5UUy5tZWRpYWNoYW5nZSwge1xuXHRcdFx0XHRcdFx0dHlwZTogVmVhbXMuRVZFTlRTLm1lZGlhY2hhbmdlLFxuXHRcdFx0XHRcdFx0Y3VycmVudE1lZGlhOiBjdXJyZW50TWVkaWEsXG5cdFx0XHRcdFx0XHRvbGRNZWRpYTogb2xkTWVkaWFcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAod2lkdGggIT09IFZlYW1zLmRldGVjdGlvbnMud2lkdGgpIHtcblx0XHRcdFx0VmVhbXMuZGV0ZWN0aW9ucy53aWR0aCA9IHdpZHRoO1xuXHRcdFx0XHRWZWFtcy5WZW50LnRyaWdnZXIoVmVhbXMuRVZFTlRTLnJlc2l6ZSwgZSk7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcy5vcHRpb25zLmRlbGF5KTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmVhbXNNZWRpYVF1ZXJ5SGFuZGxlcjsiLCIndXNlIHN0cmljdCc7XG5cbmxldCBWZWFtcyA9IHt9O1xubGV0IF9fY2FjaGUgPSBbXTtcbmxldCBfX3JlZ2lzdGVyID0ge1xuXHRtb2R1bGVzSW5SZWdpc3RlcjogW10sXG5cdG1vZHVsZXNPbkNvbmRpdGlvbnM6IFtdLFxuXHRtb2R1bGVzT25Jbml0OiBbXSxcblx0bW9kdWxlc0luQ29udGV4dDogW11cbn07XG5cbi8qKlxuICogVE9ETzogQ2xlYW4gdXAgbXV0YXRpb24gb2JzZXJ2ZXJcbiAqL1xuXG4vKipcbiAqIC0gR2V0IG1vZHVsZXMgaW4gRE9NXG4gKiAtIEdldCBjbGFzc2VzIGFuZCBvcHRpb25zIGZyb20gaW5pdCBwcm9jZXNzXG4gKiAtIFNwbGl0IHVwIGNvbmRpdGlvbmFsIG1vZHVsZXMgZnJvbSBpbml0aWFsIG1vZHVsZXNcbiAqIC0gSW5pdCBvdGhlciBtb2R1bGVzXG4gKiAtIEJpbmQgZXZlbnRzIHdoZW4gYXZhaWxhYmxlIGZyb20gY29uZGl0aW9uYWwgbW9kdWxlc1xuICogLVxuICovXG5cbmNsYXNzIE1vZHVsZXMge1xuXHRjb25zdHJ1Y3RvcihWRUFNUyA9IHdpbmRvdy5WZWFtcywgb3B0cykge1xuXHRcdFZlYW1zID0gVkVBTVM7XG5cblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRzO1xuXG5cdFx0aWYgKCF0aGlzLm9wdGlvbnMuaW50ZXJuYWxDYWNoZU9ubHkpIHtcblx0XHRcdHRoaXMuX2NhY2hlID0gX19jYWNoZTsgLy8gTW9kdWxlIGxpc3Rcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMub3B0aW9ucy5pbnRlcm5hbFJlZ2lzdGVyT25seSkge1xuXHRcdFx0dGhpcy5fcmVnaXN0ZXIgPSBfX3JlZ2lzdGVyO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHR0aGlzLnF1ZXJ5U3RyaW5nID0gYFske3RoaXMub3B0aW9ucy5hdHRyUHJlZml4fS0ke3RoaXMub3B0aW9ucy5hdHRyTmFtZX1dYDtcblx0XHRfX3JlZ2lzdGVyLm1vZHVsZXNJbkNvbnRleHQgPSBWZWFtcy5oZWxwZXJzLnF1ZXJ5U2VsZWN0b3JBcnJheSh0aGlzLnF1ZXJ5U3RyaW5nKTtcblxuXHRcdGlmICh0aGlzLm9wdGlvbnMudXNlTXV0YXRpb25PYnNlcnZlcikge1xuXHRcdFx0dGhpcy5vYnNlcnZlKGRvY3VtZW50LmJvZHkpO1xuXHRcdH1cblxuXHRcdHRoaXMuYmluZEV2ZW50cygpO1xuXHR9XG5cblx0YmluZEV2ZW50cygpIHtcblx0XHRpZiAoIVZlYW1zLlZlbnQgJiYgdGhpcy5vcHRpb25zLnVzZU11dGF0aW9uT2JzZXJ2ZXIgPT09IGZhbHNlKSB7XG5cdFx0XHRjb25zb2xlLmluZm8oJ1ZlYW1zTW9kdWxlcyA6OiBJbiBvcmRlciB0byB3b3JrIHdpdGggdGhlIHRoZSBhamF4IGhhbmRsaW5nIGluIFZlYW1zTW9kdWxlc0hhbmRsZXIgJyArXG5cdFx0XHRcdCd5b3UgbmVlZCB0byBkZWZpbmUgXCJ1c2VNdXRhdGlvbk9ic2VydmVyXCIgb3IgdXNlIHRoZSBWZWFtc1ZlbnQgcGx1Z2luIScpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKFZlYW1zLlZlbnQgJiYgdGhpcy5vcHRpb25zLnVzZU11dGF0aW9uT2JzZXJ2ZXIgPT09IGZhbHNlKSB7XG5cdFx0XHRWZWFtcy5WZW50Lm9uKFZlYW1zLkVWRU5UUy5ET01jaGFuZ2VkLCAoZSwgY29udGV4dCkgPT4ge1xuXHRcdFx0XHRfX3JlZ2lzdGVyLm1vZHVsZXNJbkNvbnRleHQgPSB0aGlzLmdldE1vZHVsZXNJbkNvbnRleHQoY29udGV4dCk7XG5cblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5sb2dzKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5pbmZvKCdWZWFtc01vZHVsZXMgOjogUmVjb3JkaW5nIG5ldyBjb250ZXh0LiBXaGVuIGF2YWlsYWJsZSBuZXcgbW9kdWxlcyB3aWxsIGJlIGluaXRpYWxpc2VkIGluOiAnLCBjb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJBbGwoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvLyBTVEFUSUMgQ0FDSEUgSEFORExFUlxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHQvKipcblx0ICogU2F2ZSB0aGUgbW9kdWxlIGluIF9fY2FjaGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBtb2R1bGUgLSBtb2R1bGUgbWV0YWRhdGEgb2JqZWN0IChAc2VlIFZlYW1zQ29tcG9uZW50Lm1ldGFEYXRhKCkpXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IC0gbW9kdWxlIGVsZW1lbnQgKHRoaXMuZWwpXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZSAtIG1vZHVsZSBpbnN0YW5jZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIC0gbW9kdWxlIG5hbWVzcGFjZVxuXHQgKi9cblx0c3RhdGljIGFkZFRvQ2FjaGUoe21vZHVsZSwgZWxlbWVudCwgaW5zdGFuY2UsIG5hbWVzcGFjZX0pIHtcblx0XHRfX2NhY2hlLnB1c2goe1xuXHRcdFx0bW9kdWxlLFxuXHRcdFx0ZWxlbWVudCxcblx0XHRcdGluc3RhbmNlLFxuXHRcdFx0bmFtZXNwYWNlXG5cdFx0fSk7XG5cblx0XHRpZiAoVmVhbXMuVmVudCAmJiBWZWFtcy5FVkVOVFMubW9kdWxlQ2FjaGVkKSB7XG5cdFx0XHRWZWFtcy5WZW50LnRyaWdnZXIoVmVhbXMuRVZFTlRTLm1vZHVsZUNhY2hlZCwge1xuXHRcdFx0XHRtb2R1bGUsXG5cdFx0XHRcdGVsZW1lbnRcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyByZW1vdmVGcm9tQ2FjaGVCeUtleShvYmosIGtleSA9ICdlbGVtZW50Jykge1xuXHRcdGxldCBkZWxldGVJbmRleDtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgX19jYWNoZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGNhY2hlSXRlbSA9IF9fY2FjaGVbaV07XG5cblx0XHRcdGlmIChjYWNoZUl0ZW1ba2V5XSA9PT0gb2JqKSB7XG5cdFx0XHRcdGlmIChjYWNoZUl0ZW0uaW5zdGFuY2Uud2lsbFVubW91bnQpIGNhY2hlSXRlbS5pbnN0YW5jZS53aWxsVW5tb3VudCgpO1xuXHRcdFx0XHRpZiAoY2FjaGVJdGVtLmluc3RhbmNlLnVucmVnaXN0ZXJFdmVudHMpIGNhY2hlSXRlbS5pbnN0YW5jZS51bnJlZ2lzdGVyRXZlbnRzKCk7XG5cdFx0XHRcdGlmIChjYWNoZUl0ZW0uaW5zdGFuY2UuZGlkVW5tb3VudCkgY2FjaGVJdGVtLmluc3RhbmNlLmRpZFVubW91bnQoKTtcblxuXHRcdFx0XHRkZWxldGVJbmRleCA9IGk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGRlbGV0ZUluZGV4KSBfX2NhY2hlLnNwbGljZShkZWxldGVJbmRleCwgMSk7XG5cdH1cblxuXHRzdGF0aWMgY2hlY2tNb2R1bGVJbkNhY2hlKG9iaiwga2V5ID0gJ2VsZW1lbnQnLCBuYW1lc3BhY2UgPSB1bmRlZmluZWQpIHtcblx0XHRsZXQgc3RhdGUgPSBmYWxzZTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgX19jYWNoZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGNhY2hlSXRlbSA9IF9fY2FjaGVbaV07XG5cblx0XHRcdHN0YXRlID0gKG5hbWVzcGFjZSAhPT0gdW5kZWZpbmVkKSA/IGNhY2hlSXRlbVtrZXldID09PSBvYmogJiYgY2FjaGVJdGVtLm5hbWVzcGFjZSA9PT0gbmFtZXNwYWNlIDogY2FjaGVJdGVtW2tleV0gPT09IG9iajtcblxuXHRcdFx0aWYgKHN0YXRlKSBicmVhaztcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly8gQ09ORElUSU9OUyBIQU5ETEVSXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdHN0YXRpYyBpc0NvbmRpdGlvbih7Y29uZGl0aW9uc30pIHtcblx0XHRyZXR1cm4gY29uZGl0aW9ucyAmJiB0eXBlb2YgY29uZGl0aW9ucyA9PT0gJ2Z1bmN0aW9uJztcblx0fVxuXG5cdHN0YXRpYyBtYWtlQ29uZGl0aW9uQ2hlY2soe2NvbmRpdGlvbnN9KSB7XG5cdFx0aWYgKGNvbmRpdGlvbnMgJiYgdHlwZW9mIGNvbmRpdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHJldHVybiBjb25kaXRpb25zKCk7XG5cdFx0fVxuXHR9XG5cblx0YmluZENvbmRpdGlvbnMoKSB7XG5cdFx0X19yZWdpc3Rlci5tb2R1bGVzT25Db25kaXRpb25zLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuXHRcdFx0aWYgKG1vZHVsZS5jb25kaXRpb25zTGlzdGVuT24gJiYgbW9kdWxlLmNvbmRpdGlvbnNMaXN0ZW5Pbi5sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy5iaW5kQ29uZGl0aW9uKG1vZHVsZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRiaW5kQ29uZGl0aW9uKG1vZHVsZSkge1xuXHRcdGxldCBnbG9iYWxFdnRzID0gbW9kdWxlLmNvbmRpdGlvbnNMaXN0ZW5Pbi5qb2luKCcgJyk7XG5cblx0XHRpZiAoVmVhbXMuVmVudCkge1xuXHRcdFx0VmVhbXMuVmVudC5zdWJzY3JpYmUoZ2xvYmFsRXZ0cywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVyQ29uZGl0aW9uYWxNb2R1bGUobW9kdWxlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvLyBVTi9SRUdJU1RFUiBIQU5ETEVSXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdC8qKlxuXHQgKiBTcGxpdCB1cCBtb2R1bGVzIGRlcGVuZGluZyBvbiBjb25kaXRpb24gY2hlY2tcblx0ICovXG5cdHNwbGl0VXBNb2R1bGVzKCkge1xuXHRcdF9fcmVnaXN0ZXIubW9kdWxlc0luUmVnaXN0ZXIuZm9yRWFjaCgob2JqKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5jb25zdHJ1Y3Rvci5pc0NvbmRpdGlvbihvYmopKSB7XG5cdFx0XHRcdF9fcmVnaXN0ZXIubW9kdWxlc09uQ29uZGl0aW9ucy5wdXNoKG9iaik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfX3JlZ2lzdGVyLm1vZHVsZXNPbkluaXQucHVzaChvYmopO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyIG11bHRpcGxlIG1vZHVsZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGFyciAtIEFycmF5IHdoaWNoIGNvbnRhaW5zIHRoZSBtb2R1bGVzIGFzIG9iamVjdC5cblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKi9cblx0cmVnaXN0ZXIoYXJyKSB7XG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVmVhbXNNb2R1bGVzIDo6IFlvdSBuZWVkIHRvIHBhc3MgYW4gYXJyYXkgdG8gcmVnaXN0ZXIoKSEnKTtcblx0XHR9XG5cblx0XHRfX3JlZ2lzdGVyLm1vZHVsZXNJblJlZ2lzdGVyID0gX19yZWdpc3Rlci5tb2R1bGVzSW5SZWdpc3Rlci5jb25jYXQoYXJyKTtcblxuXHRcdHRoaXMuc3BsaXRVcE1vZHVsZXMoKTtcblx0XHR0aGlzLmJpbmRDb25kaXRpb25zKCk7XG5cdFx0dGhpcy5yZWdpc3RlckFsbCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVyIGFsbCBtb2R1bGVzXG5cdCAqL1xuXHRyZWdpc3RlckFsbCgpIHtcblx0XHRpZiAoIV9fcmVnaXN0ZXIubW9kdWxlc0luUmVnaXN0ZXIpIHJldHVybjtcblxuXHRcdHRoaXMucmVnaXN0ZXJJbml0aWFsTW9kdWxlcygpO1xuXHRcdHRoaXMucmVnaXN0ZXJDb25kaXRpb25hbE1vZHVsZXMoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBhbGwgaW5pdGlhbCBtb2R1bGVzXG5cdCAqL1xuXHRyZWdpc3RlckluaXRpYWxNb2R1bGVzKCkge1xuXHRcdF9fcmVnaXN0ZXIubW9kdWxlc09uSW5pdC5mb3JFYWNoKChvYmopID0+IHtcblx0XHRcdHRoaXMucmVnaXN0ZXJPbmUob2JqKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBjb25kaXRpb25hbCBtb2R1bGVzXG5cdCAqXG5cdCAqIFRoZXJlZm9yZSB3ZSBjaGVjayB0aGUgY29uZGl0aW9uIGFuZFxuXHQgKiB3aGVuIHRydWUgcmVnaXN0ZXIgdGhlIHNwZWNpZmljIG1vZHVsZVxuXHQgKiB3aGVuIGZhbHNlIHVucmVnaXN0ZXIgdGhlIHNwZWNpZmljIG1vZHVsZVxuXHQgKi9cblx0cmVnaXN0ZXJDb25kaXRpb25hbE1vZHVsZXMoKSB7XG5cdFx0X19yZWdpc3Rlci5tb2R1bGVzT25Db25kaXRpb25zLmZvckVhY2goKG9iaikgPT4ge1xuXHRcdFx0dGhpcy5yZWdpc3RlckNvbmRpdGlvbmFsTW9kdWxlKG9iaik7XG5cdFx0fSk7XG5cdH1cblxuXHRyZWdpc3RlckNvbmRpdGlvbmFsTW9kdWxlKG9iaikge1xuXHRcdGlmICh0aGlzLmNvbnN0cnVjdG9yLm1ha2VDb25kaXRpb25DaGVjayhvYmopKSB7XG5cdFx0XHR0aGlzLnJlZ2lzdGVyT25lKG9iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudW5yZWdpc3Rlck9uZShvYmopO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlciBvbmUgbW9kdWxlIGFuZCBpbml0IHRoZSBlbGVtZW50cyBpbiB0aGUgc3BlY2lmaWMgY29udGV4dFxuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIC0gUmVxdWlyZWQ6IGVsZW1lbnQgbmFtZSBpbiBET01cblx0ICogQHBhcmFtIHtTdHJpbmd9IGRvbU5hbWUgLSBSZXF1aXJlZDogZWxlbWVudCBuYW1lIGluIERPTVxuXHQgKiBAcGFyYW0ge09iamVjdH0gbW9kdWxlIC0gUmVxdWlyZWQ6IGNsYXNzIHdoaWNoIHdpbGwgYmUgdXNlZCB0byByZW5kZXIgeW91ciBtb2R1bGVcblx0ICogQHBhcmFtIHtib29sZWFufSBbcmVuZGVyPXRydWVdIC0gT3B0aW9uYWw6IHJlbmRlciB0aGUgY2xhc3MsIGlmIGZhbHNlIHRoZSBjbGFzcyB3aWxsIG9ubHkgYmUgaW5pdGlhbGl6ZWRcblx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW2NiXSAtIE9wdGlvbmFsOiBwcm92aWRlIGEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBleGVjdXRlZCBhZnRlciBpbml0aWFsaXNhdGlvblxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gT3B0aW9uYWw6IFlvdSBjYW4gcGFzcyBvcHRpb25zIHRvIHRoZSBtb2R1bGUgdmlhIEpTIChVc2VmdWwgZm9yIERPTUNoYW5nZWQpXG5cdCAqXG5cdCAqL1xuXHRyZWdpc3Rlck9uZSh7bmFtZXNwYWNlLCBkb21OYW1lLCBtb2R1bGUsIHJlbmRlciwgY2IsIG9wdGlvbnN9KSB7XG5cdFx0bGV0IG5hbWVTcGFjZSA9IG5hbWVzcGFjZSA/IG5hbWVzcGFjZSA6IGRvbU5hbWU7XG5cblx0XHRpZiAoIW1vZHVsZSkgdGhyb3cgbmV3IEVycm9yKCdWZWFtc01vZHVsZXMgOjogSW4gb3JkZXIgdG8gd29yayB3aXRoIHJlZ2lzdGVyKCkgeW91IG5lZWQgdG8gZGVmaW5lIGEgbW9kdWxlIScpO1xuXHRcdGlmICghbmFtZVNwYWNlKXRocm93IG5ldyBFcnJvcignVmVhbXNNb2R1bGVzIDo6IEluIG9yZGVyIHRvIHdvcmsgd2l0aCByZWdpc3RlcigpIHlvdSBuZWVkIHRvIGRlZmluZSBhIG1vZHVsZSEnKTtcblxuXHRcdHRoaXMuaW5pdE1vZHVsZXMoe1xuXHRcdFx0bmFtZXNwYWNlOiBuYW1lU3BhY2UsXG5cdFx0XHRtb2R1bGUsXG5cdFx0XHRyZW5kZXIsXG5cdFx0XHRjYixcblx0XHRcdG9wdGlvbnNcblx0XHR9KTtcblx0fVxuXG5cdHVucmVnaXN0ZXJPbmUoe25hbWVzcGFjZX0pIHtcblx0XHRpZiAodGhpcy5jb25zdHJ1Y3Rvci5jaGVja01vZHVsZUluQ2FjaGUobmFtZXNwYWNlLCAnbmFtZXNwYWNlJykgPT09IHRydWUpIHtcblx0XHRcdHRoaXMuY29uc3RydWN0b3IucmVtb3ZlRnJvbUNhY2hlQnlLZXkobmFtZXNwYWNlLCAnbmFtZXNwYWNlJyk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdC8vIElOSVQgSEFORExFUlxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZSBhIG1vZHVsZSBhbmQgcmVuZGVyIGl0IGFuZC9vciBwcm92aWRlIGEgY2FsbGJhY2sgZnVuY3Rpb25cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSAtIFJlcXVpcmVkOiBkb20gbmFtZSBvZiB0aGUgZWxlbWVudFxuXHQgKiBAcGFyYW0ge09iamVjdH0gbW9kdWxlIC0gUmVxdWlyZWQ6IGNsYXNzIHdoaWNoIHdpbGwgYmUgdXNlZCB0byByZW5kZXIgeW91ciBtb2R1bGVcblx0ICogQHBhcmFtIHtib29sZWFufSBbcmVuZGVyPXRydWVdIC0gT3B0aW9uYWw6IHJlbmRlciB0aGUgY2xhc3MsIGlmIGZhbHNlIHRoZSBjbGFzcyB3aWxsIG9ubHkgYmUgaW5pdGlhbGl6ZWRcblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIE9wdGlvbmFsOiBZb3UgY2FuIHBhc3Mgb3B0aW9ucyB0byB0aGUgbW9kdWxlIHZpYSBKUyAoVXNlZnVsIGZvciBET01DaGFuZ2VkKVxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2JdIC0gT3B0aW9uYWw6IHByb3ZpZGUgYSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGV4ZWN1dGVkIGFmdGVyIGluaXRpYWxpc2F0aW9uXG5cdCAqXG5cdCAqL1xuXHRpbml0TW9kdWxlcyh7bmFtZXNwYWNlLCBtb2R1bGUsIHJlbmRlciwgb3B0aW9ucywgY2J9KSB7XG5cdFx0VmVhbXMuaGVscGVycy5mb3JFYWNoKF9fcmVnaXN0ZXIubW9kdWxlc0luQ29udGV4dCwgKGksIGVsKSA9PiB7XG5cdFx0XHR0aGlzLmluaXRNb2R1bGUoe1xuXHRcdFx0XHRlbCxcblx0XHRcdFx0bmFtZXNwYWNlLFxuXHRcdFx0XHRvcHRpb25zLFxuXHRcdFx0XHRtb2R1bGUsXG5cdFx0XHRcdHJlbmRlcixcblx0XHRcdFx0Y2Jcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0aW5pdE1vZHVsZSh7ZWwsIG5hbWVzcGFjZSwgb3B0aW9ucywgbW9kdWxlLCByZW5kZXIsIGNifSkge1xuXHRcdGxldCBub1JlbmRlciA9IGVsLmdldEF0dHJpYnV0ZShgJHt0aGlzLm9wdGlvbnMuYXR0clByZWZpeH0tbm8tcmVuZGVyYCkgfHwgcmVuZGVyID09PSBmYWxzZSB8fCBmYWxzZTtcblx0XHRsZXQgZGF0YU1vZHVsZXMgPSBlbC5nZXRBdHRyaWJ1dGUoYCR7dGhpcy5vcHRpb25zLmF0dHJQcmVmaXh9LSR7dGhpcy5vcHRpb25zLmF0dHJOYW1lfWApLnNwbGl0KCcgJyk7XG5cblx0XHRpZiAoZGF0YU1vZHVsZXMuaW5kZXhPZihuYW1lc3BhY2UpICE9PSAtMSkge1xuXHRcdFx0Ly8gQ2hlY2sgaW5pdCBzdGF0ZVxuXHRcdFx0aWYgKHRoaXMuY29uc3RydWN0b3IuY2hlY2tNb2R1bGVJbkNhY2hlKGVsLCAnZWxlbWVudCcsIG5hbWVzcGFjZSkgPT09IHRydWUpIHtcblx0XHRcdFx0Y29uc29sZS5pbmZvKCdWZWFtc01vZHVsZXMgOjogRWxlbWVudCBpcyBhbHJlYWR5IGluIGNhY2hlIGFuZCBpbml0aWFsaXplZDogJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVsKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBHbyBhaGVhZCB3aGVuIGNvbmRpdGlvbiBpcyB0cnVlXG5cdFx0XHRsZXQgYXR0cnMgPSBlbC5nZXRBdHRyaWJ1dGUoYCR7dGhpcy5vcHRpb25zLmF0dHJQcmVmaXh9LSR7dGhpcy5vcHRpb25zLmF0dHJPcHRpb25zfWApO1xuXHRcdFx0bGV0IG1lcmdlZE9wdGlvbnMgPSBWZWFtcy5oZWxwZXJzLmV4dGVuZChKU09OLnBhcnNlKGF0dHJzKSwgb3B0aW9ucyB8fCB7fSk7XG5cdFx0XHRsZXQgTW9kdWxlID0gbW9kdWxlO1xuXHRcdFx0bGV0IGluc3RhbmNlID0gbmV3IE1vZHVsZSh7XG5cdFx0XHRcdGVsLFxuXHRcdFx0XHRuYW1lc3BhY2UsXG5cdFx0XHRcdG9wdGlvbnM6IG1lcmdlZE9wdGlvbnMsXG5cdFx0XHRcdGFwcEluc3RhbmNlOiBWZWFtc1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuY29uc3RydWN0b3IuYWRkVG9DYWNoZSh7XG5cdFx0XHRcdGVsZW1lbnQ6IGVsLFxuXHRcdFx0XHRtb2R1bGUsXG5cdFx0XHRcdGluc3RhbmNlLFxuXHRcdFx0XHRuYW1lc3BhY2Vcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBNb3VudCBwcm9jZXNzXG5cdFx0XHRpZiAoaW5zdGFuY2Uud2lsbE1vdW50KSBpbnN0YW5jZS53aWxsTW91bnQoKTtcblxuXHRcdFx0Ly8gUmVuZGVyIGFmdGVyIGluaXRpYWwgbW9kdWxlIGxvYWRpbmdcblx0XHRcdGlmICghbm9SZW5kZXIpIGluc3RhbmNlLnJlbmRlcigpO1xuXG5cdFx0XHQvLyBQcm92aWRlIGNhbGxiYWNrIGZ1bmN0aW9uIGluIHdoaWNoIHlvdSBjYW4gdXNlIG1vZHVsZSBhbmQgb3B0aW9uc1xuXHRcdFx0aWYgKGNiICYmIHR5cGVvZiAoY2IpID09PSAnZnVuY3Rpb24nKSBjYihtb2R1bGUsIG1lcmdlZE9wdGlvbnMpO1xuXG5cdFx0XHQvLyBNb3VudCBwcm9jZXNzXG5cdFx0XHRpZiAoaW5zdGFuY2UuZGlkTW91bnQpIGluc3RhbmNlLmRpZE1vdW50KCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEFkZCBtdXRhdGlvbiBvYnNlcnZlciB0byBvYnNlcnZlIG5ldyBtb2R1bGVzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dCAtIENvbnRleHQgZm9yIHRoZSBtdXRhdGlvbiBvYnNlcnZlclxuXHQgKlxuXHQgKiBUT0RPOiBJbXByb3ZlIGZvciBsb29wc1xuXHQgKi9cblx0b2JzZXJ2ZShjb250ZXh0KSB7XG5cdFx0bGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuXHRcdFx0Ly8gbG9vayB0aHJvdWdoIGFsbCBtdXRhdGlvbnMgdGhhdCBqdXN0IG9jY3VyZWRcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb25zLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdC8vIGxvb2sgdGhyb3VnaCBhbGwgYWRkZWQgbm9kZXMgb2YgdGhpcyBtdXRhdGlvblxuXG5cdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgbXV0YXRpb25zW2ldLmFkZGVkTm9kZXMubGVuZ3RoOyArK2opIHtcblx0XHRcdFx0XHRsZXQgYWRkZWROb2RlID0gbXV0YXRpb25zW2ldLmFkZGVkTm9kZXNbal07XG5cblx0XHRcdFx0XHRpZiAoYWRkZWROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdFx0XHRcdGlmIChhZGRlZE5vZGUuZ2V0QXR0cmlidXRlKGAke3RoaXMub3B0aW9ucy5hdHRyUHJlZml4fS0ke3RoaXMub3B0aW9ucy5hdHRyTmFtZX1gKSkge1xuXHRcdFx0XHRcdFx0XHRsZXQgbmFtZXNwYWNlID0gYWRkZWROb2RlLmdldEF0dHJpYnV0ZShgJHt0aGlzLm9wdGlvbnMuYXR0clByZWZpeH0tJHt0aGlzLm9wdGlvbnMuYXR0ck5hbWV9YCk7XG5cblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5sb2dzKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5pbmZvKGBWZWFtc01vZHVsZXMgOjogUmVjb3JkaW5nIGEgbmV3IG1vZHVsZSB3aXRoIHRoZSBuYW1lc3BhY2UgJHtuYW1lc3BhY2V9IGF0OiBgLCBhZGRlZE5vZGUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgbW9kdWxlIG9mIF9fcmVnaXN0ZXIubW9kdWxlc0luUmVnaXN0ZXIpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAobW9kdWxlLm5hbWVzcGFjZSA9PT0gbmFtZXNwYWNlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmluaXRNb2R1bGUoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbDogYWRkZWROb2RlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZS5tb2R1bGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWVzcGFjZTogbW9kdWxlLm5hbWVzcGFjZVxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5nZXRNb2R1bGVzSW5Db250ZXh0KGFkZGVkTm9kZSkubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdF9fcmVnaXN0ZXIubW9kdWxlc0luQ29udGV4dCA9IHRoaXMuZ2V0TW9kdWxlc0luQ29udGV4dChhZGRlZE5vZGUpO1xuXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMubG9ncykge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuaW5mbygnVmVhbXNNb2R1bGVzIDo6IFJlY29yZGluZyBuZXcgY29udGV4dC4gV2hlbiBhdmFpbGFibGUgbmV3IG1vZHVsZXMgd2lsbCBiZSBpbml0aWFsaXNlZCBpbjogJywgYWRkZWROb2RlKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHRoaXMucmVnaXN0ZXJBbGwoKTtcblxuXHRcdFx0XHRcdFx0XHRfX3JlZ2lzdGVyLm1vZHVsZXNJbkNvbnRleHQgPSB0aGlzLmdldE1vZHVsZXNJbkNvbnRleHQoZG9jdW1lbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgbXV0YXRpb25zW2ldLnJlbW92ZWROb2Rlcy5sZW5ndGg7ICsraikge1xuXHRcdFx0XHRcdGxldCByZW1vdmVkTm9kZSA9IG11dGF0aW9uc1tpXS5yZW1vdmVkTm9kZXNbal07XG5cblx0XHRcdFx0XHRpZiAocmVtb3ZlZE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuXHRcdFx0XHRcdFx0aWYgKHJlbW92ZWROb2RlLmdldEF0dHJpYnV0ZShgJHt0aGlzLm9wdGlvbnMuYXR0clByZWZpeH0tJHt0aGlzLm9wdGlvbnMuYXR0ck5hbWV9YCkpIHtcblxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLmxvZ3MpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmluZm8oJ1ZlYW1zTW9kdWxlcyA6OiBSZWNvcmRpbmcgZGVsZXRpb24gb2YgbW9kdWxlOiAnLCByZW1vdmVkTm9kZSk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR0aGlzLmNvbnN0cnVjdG9yLnJlbW92ZUZyb21DYWNoZUJ5S2V5KHJlbW92ZWROb2RlKTtcblxuXHRcdFx0XHRcdFx0XHRfX3JlZ2lzdGVyLm1vZHVsZXNJbkNvbnRleHQgPSB0aGlzLmdldE1vZHVsZXNJbkNvbnRleHQoZG9jdW1lbnQpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5nZXRNb2R1bGVzSW5Db250ZXh0KHJlbW92ZWROb2RlKS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0X19yZWdpc3Rlci5tb2R1bGVzSW5Db250ZXh0ID0gdGhpcy5nZXRNb2R1bGVzSW5Db250ZXh0KHJlbW92ZWROb2RlKTtcblxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLmxvZ3MpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmluZm8oJ1ZlYW1zTW9kdWxlcyA6OiBSZWNvcmRpbmcgZGVsZXRpb24gb2YgRE9NIGVsZW1lbnQuIFdoZW4gYXZhaWxhYmxlIG1vZHVsZXMgd2lsbCBiZSB1bmJvdW5kIGluICcsIHJlbW92ZWROb2RlKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdF9fcmVnaXN0ZXIubW9kdWxlc0luQ29udGV4dC5mb3JFYWNoKChub2RlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5jb25zdHJ1Y3Rvci5yZW1vdmVGcm9tQ2FjaGVCeUtleShub2RlKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdFx0X19yZWdpc3Rlci5tb2R1bGVzSW5Db250ZXh0ID0gdGhpcy5nZXRNb2R1bGVzSW5Db250ZXh0KGRvY3VtZW50KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdG9ic2VydmVyLm9ic2VydmUoY29udGV4dCwge1xuXHRcdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdFx0c3VidHJlZTogdHJ1ZVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBNb2R1bGVzIGluIGEgc3BlY2lmaWMgY29udGV4dC5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgLSBDb250ZXh0IGZvciBxdWVyeSBzcGVjaWZpYyBzdHJpbmdcblx0ICovXG5cdGdldE1vZHVsZXNJbkNvbnRleHQoY29udGV4dCkge1xuXHRcdHJldHVybiBWZWFtcy5oZWxwZXJzLnF1ZXJ5U2VsZWN0b3JBcnJheSh0aGlzLnF1ZXJ5U3RyaW5nLCBjb250ZXh0KTtcblx0fVxufVxuXG4vKipcbiAqIFBsdWdpbiBvYmplY3RcbiAqL1xuY29uc3QgVmVhbXNNb2R1bGVzID0ge1xuXHRvcHRpb25zOiB7XG5cdFx0REVCVUc6IGZhbHNlLFxuXHRcdGF0dHJQcmVmaXg6ICdkYXRhLWpzJyxcblx0XHRhdHRyTmFtZTogJ21vZHVsZScsXG5cdFx0YXR0ck9wdGlvbnM6ICdvcHRpb25zJyxcblx0XHRsb2dzOiBmYWxzZSxcblx0XHRpbnRlcm5hbENhY2hlT25seTogdHJ1ZSxcblx0XHRpbnRlcm5hbFJlZ2lzdGVyT25seTogZmFsc2UsXG5cdFx0dXNlTXV0YXRpb25PYnNlcnZlcjogZmFsc2Vcblx0fSxcblx0cGx1Z2luTmFtZTogJ01vZHVsZXNIYW5kbGVyJyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24gKFZlYW1zLCBvcHRzKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gVmVhbXMuaGVscGVycy5leHRlbmQodGhpcy5vcHRpb25zLCBvcHRzIHx8IHt9KTtcblx0XHRWZWFtcy5tb2R1bGVzID0gVmVhbXMubW9kdWxlcyB8fCBuZXcgTW9kdWxlcyhWZWFtcywgdGhpcy5vcHRpb25zKTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmVhbXNNb2R1bGVzO1xuXG5leHBvcnQgeyBNb2R1bGVzIH07IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBWZW50IHBsdWdpbiB3aGljaCBjcmVhdGVzIGFuIGVtcHR5IG9iamVjdC5cbiAqIFRoZSBvYmplY3Qgd2lsbCBiZSB1c2VkIGFzIHB1Ymxpc2gvc3Vic2NyaWJlIHBsdWdpbi5cbiAqXG4gKiBUaGUgbW9kdWxlIGV4dGVuZHMgdGhlIGRlZmF1bHQgRVZFTlRTIG9iamVjdCBvZiBWZWFtc1xuICogd2hlbiB5b3UgcGFzcyB0aGUgb3B0aW9uIGNhbGxlZCAnZnVydGhlckV2ZW50cycuXG4gKlxuICogQG1vZHVsZSBWZWFtc1ZlbnRcbiAqXG4gKiBAYXV0aG9yIFNlYmFzdGlhbiBGaXR6bmVyXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIEV2ZW50c0hhbmRsZXJcbiAqXG4gKiBQdWIvU3ViIHN5c3RlbSBmb3IgTG9vc2VseSBDb3VwbGVkIGxvZ2ljLlxuICogQmFzZWQgb24gUGV0ZXIgSGlnZ2lucycgcG9ydCBmcm9tIERvam8gdG8galF1ZXJ5XG4gKiBodHRwczovL2dpdGh1Yi5jb20vcGhpZ2dpbnM0Mi9ibG9vZHktanF1ZXJ5LXBsdWdpbnMvYmxvYi9tYXN0ZXIvcHVic3ViLmpzXG4gKiBhZG9wdGVkIGh0dHBzOi8vZ2l0aHViLmNvbS9waGlnZ2luczQyL2Jsb29keS1qcXVlcnktcGx1Z2lucy9ibG9iLzU1ZTQxZGY5YmYwOGY0MjM3OGJiMDhiOTNlZmNiMjg1NTViNjFhZWIvcHVic3ViLmpzXG4gKlxuICogbW9kaWZpZWQgYnkgU2ViYXN0aWFuIEZpdHpuZXJcbiAqXG4gKi9cbmNvbnN0IEV2ZW50c0hhbmRsZXIgPSAoZnVuY3Rpb24gKCkge1xuXHRsZXQgY2FjaGUgPSB7fSxcblx0XHQvKipcblx0XHQgKiAgICBFdmVudHMucHVibGlzaFxuXHRcdCAqICAgIGUuZy46IEV2ZW50cy5wdWJsaXNoKFwiL0FydGljbGUvYWRkZWRcIiwge2FydGljbGU6IGFydGljbGV9LCB0aGlzKTtcblx0XHQgKlxuXHRcdCAqICAgIEBjbGFzcyBFdmVudHNcblx0XHQgKiAgICBAbWV0aG9kIHB1Ymxpc2hcblx0XHQgKiAgICBAcGFyYW0gdG9waWMge1N0cmluZ31cblx0XHQgKiAgICBAcGFyYW0gYXJncyAgICB7T2JqZWN0fVxuXHRcdCAqICAgIEBwYXJhbSBzY29wZSB7T2JqZWN0fSBPcHRpb25hbFxuXHRcdCAqL1xuXHRcdHB1Ymxpc2ggPSBmdW5jdGlvbiAodG9waWMsIGFyZ3MsIHNjb3BlKSB7XG5cdFx0XHRpZiAoY2FjaGVbdG9waWNdKSB7XG5cdFx0XHRcdGxldCB0aGlzVG9waWMgPSBjYWNoZVt0b3BpY107XG5cdFx0XHRcdGxldCBpID0gdGhpc1RvcGljLmxlbmd0aCAtIDE7XG5cblx0XHRcdFx0Zm9yIChpOyBpID49IDA7IGkgLT0gMSkge1xuXHRcdFx0XHRcdHRoaXNUb3BpY1tpXS5jYWxsKHNjb3BlIHx8IHRoaXMsIGFyZ3MgfHwge30pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiAgICBFdmVudHMuc3Vic2NyaWJlXG5cdFx0ICogICAgZS5nLjogRXZlbnRzLnN1YnNjcmliZShcIi9BcnRpY2xlL2FkZGVkXCIsIEFydGljbGVzLnZhbGlkYXRlKVxuXHRcdCAqXG5cdFx0ICogICAgQGNsYXNzIEV2ZW50c1xuXHRcdCAqICAgIEBtZXRob2Qgc3Vic2NyaWJlXG5cdFx0ICogICAgQHBhcmFtIHRvcGljIHtTdHJpbmd9XG5cdFx0ICogICAgQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn1cblx0XHQgKiAgICBAcmV0dXJuIEV2ZW50IGhhbmRsZXIge0FycmF5fVxuXHRcdCAqL1xuXHRcdHN1YnNjcmliZSA9IGZ1bmN0aW9uICh0b3BpYywgY2FsbGJhY2spIHtcblx0XHRcdGxldCB0b3BpY3MgPSB0b3BpYy5zcGxpdCgnICcpO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRvcGljcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgdG9waWMgPSB0b3BpY3NbaV07XG5cblx0XHRcdFx0aWYgKCFjYWNoZVt0b3BpY10pIHtcblx0XHRcdFx0XHRjYWNoZVt0b3BpY10gPSBbXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhY2hlW3RvcGljXS5wdXNoKGNhbGxiYWNrKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogICAgRXZlbnRzLnVuc3Vic2NyaWJlXG5cdFx0ICogICAgZS5nLjogdmFyIGhhbmRsZSA9IEV2ZW50cy5zdWJzY3JpYmUoXCIvQXJ0aWNsZS9hZGRlZFwiLCBBcnRpY2xlcy52YWxpZGF0ZSk7XG5cdFx0ICogICAgICAgIEV2ZW50cy51bnN1YnNjcmliZShcIi9BcnRpY2xlL2FkZGVkXCIsIEFydGljbGVzLnZhbGlkYXRlKTtcblx0XHQgKlxuXHRcdCAqICAgIEBjbGFzcyBFdmVudHNcblx0XHQgKiAgICBAbWV0aG9kIHVuc3Vic2NyaWJlXG5cdFx0ICogICAgQHBhcmFtIHRvcGljIHtTdHJpbmd9XG5cdFx0ICogICAgQHBhcmFtIGhhbmRsZSB7RnVuY3Rpb259XG5cdFx0ICogICAgQHBhcmFtIGNvbXBsZXRseSB7Qm9vbGVhbn1cblx0XHQgKi9cblx0XHR1bnN1YnNjcmliZSA9IGZ1bmN0aW9uICh0b3BpYywgaGFuZGxlLCBjb21wbGV0bHkgPSBmYWxzZSkge1xuXHRcdFx0bGV0IGkgPSBjYWNoZVt0b3BpY10ubGVuZ3RoIC0gMTtcblxuXHRcdFx0aWYgKGNhY2hlW3RvcGljXSkge1xuXHRcdFx0XHRmb3IgKGk7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdFx0aWYgKGNhY2hlW3RvcGljXVtpXSA9PT0gaGFuZGxlKSB7XG5cdFx0XHRcdFx0XHRjYWNoZVt0b3BpY10uc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0aWYgKGNvbXBsZXRseSkge1xuXHRcdFx0XHRcdFx0XHRkZWxldGUgY2FjaGVbdG9waWNdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0cmV0dXJuIHtcblx0XHRwdWJsaXNoOiBwdWJsaXNoLFxuXHRcdHN1YnNjcmliZTogc3Vic2NyaWJlLFxuXHRcdHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZSxcblx0XHR0cmlnZ2VyOiBwdWJsaXNoLFxuXHRcdG9uOiBzdWJzY3JpYmUsXG5cdFx0b2ZmOiB1bnN1YnNjcmliZVxuXHR9O1xufSgpKTtcblxuY29uc3QgVmVhbXNWZW50ID0ge1xuXHRvcHRpb25zOiB7XG5cdFx0ZnVydGhlckV2ZW50czoge31cblx0fSxcblx0cGx1Z2luTmFtZTogJ1ZlbnQnLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbiAoVmVhbXMsIG9wdHMpIHtcblxuXHRcdGlmICghVmVhbXMuJCkge1xuXHRcdFx0Y29uc29sZS5lcnJvcignVmVhbXNWZW50IDo6IFlvdSBuZWVkIHRvIGFkZCBhIERPTSBoYW5kbGVyIHBsdWdpbiBpZiB5b3Ugd2FudCB0byB1c2UgVmVhbXMuVmVudCEnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAob3B0cykge1xuXHRcdFx0dGhpcy5vcHRpb25zID0gVmVhbXMuaGVscGVycy5leHRlbmQodGhpcy5vcHRpb25zLCBvcHRzIHx8IHt9KTtcblx0XHR9XG5cblx0XHRWZWFtcy5WZW50ID0gRXZlbnRzSGFuZGxlcjtcblx0XHRWZWFtcy5FVkVOVFMgPSBWZWFtcy5oZWxwZXJzLmV4dGVuZChWZWFtcy5FVkVOVFMsIHRoaXMub3B0aW9ucy5mdXJ0aGVyRXZlbnRzKTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmVhbXNWZW50OyIsIi8qKlxuICogQ29uc3QgZm9yIGV2ZW50cyAocHViL3N1YilcbiAqXG4gKiBAYXV0aG9yOiBTZWJhc3RpYW4gRml0em5lclxuICovXG5cbi8qKlxuICogRXZlbnRzIEdsb2JhbFxuICovXG5cbmNvbnN0IEVWRU5UUyA9IHt9O1xuXG5cbi8vIEBJTlNFUlRQT0lOVCA6OiBAcmVmOiBqcy1ldmVudHNcblxuZXhwb3J0IGRlZmF1bHQgRVZFTlRTOyIsIi8vIEdsb2JhbCBkZXBlbmRlbmNpZXNcbmltcG9ydCB7QXBwLCBWZWFtc30gZnJvbSAnLi9hcHAnO1xuXG5jb25zb2xlLmxvZygnSlMgaW5pdGlhbGl6ZWQgaW4gdmVyc2lvbjonLCBBcHAudmVyc2lvbik7XG5jb25zb2xlLmxvZygnVmVhbXMgaW5pdGlhbGl6ZWQgaW4gdmVyc2lvbjonLCBWZWFtcy5iYXNlLnZlcnNpb24pO1xuXG4vLyBJbXBvcnRzXG5cbi8vIEBJTlNFUlRQT0lOVCA6OiBAcmVmOiBqcy1zZWxmLWNvbnRhaW5lZC1pbXBvcnQsIEBrZWVwOiB0cnVlIC8vXG5cbi8vIEluaXRpYWxpemUgbW9kdWxlcyB3aXRoIFZlYW1zXG5WZWFtcy5tb2R1bGVzLnJlZ2lzdGVyKFtcbiAgICAvLyBASU5TRVJUUE9JTlQgOjogQHJlZjoganMtaW5pdC12NSwgQGtlZXA6IHRydWUgLy9cbl0pO1xuXG4vLyBASU5TRVJUUE9JTlQgOjogQHJlZjoganMtaW5pdC1vbmNlLXY1LCBAa2VlcDogdHJ1ZSAvL1xuIiwiLy8gR2xvYmFsIGRlcGVuZGVuY2llcyBcbmltcG9ydCB7IGRlZmF1bHQgYXMgJCB9IGZyb20gJ3ZlYW1zLXF1ZXJ5JztcbmltcG9ydCBWZWFtcyBmcm9tICd2ZWFtcyc7XG5pbXBvcnQgVmVhbXNMb2dnZXIgZnJvbSAndmVhbXMvc3JjL2pzL3BsdWdpbnMvbG9nZ2VyJztcbmltcG9ydCBWZWFtc0RPTSBmcm9tICd2ZWFtcy9zcmMvanMvcGx1Z2lucy9kb20nO1xuaW1wb3J0IFZlYW1zVmVudCBmcm9tICd2ZWFtcy9zcmMvanMvcGx1Z2lucy92ZW50JztcbmltcG9ydCBWZWFtc01vZHVsZXMgZnJvbSAndmVhbXMvc3JjL2pzL3BsdWdpbnMvbW9kdWxlcyc7XG5pbXBvcnQgVmVhbXNNZWRpYVF1ZXJ5SGFuZGxlciBmcm9tICd2ZWFtcy9zcmMvanMvcGx1Z2lucy9tZWRpYS1xdWVyeS1oYW5kbGVyJztcbmltcG9ydCBFVkVOVFMgZnJvbSAnLi9ldmVudHMnO1xuXG5cbmxldCBBcHAgPSB7fTtcbkFwcC4kID0gJDtcblxuLy8gVmVyc2lvbmluZ1xuQXBwLnZlcnNpb24gPSBcIjAuMC4xXCI7XG5cbi8vIFZlYW1zXG5WZWFtcy5vbkluaXRpYWxpemUoKCkgPT4ge1xuXHQvKipcblx0KiBWZWFtcyBQbHVnaW5zXG5cdCovXG5cblx0Ly8gRG9tIFBsdWdpblxuXHRWZWFtcy51c2UoVmVhbXNET00sIHtcblx0XHRET006ICRcblx0fSk7XG5cblx0Ly8gVmVudCBQbHVnaW5cblx0VmVhbXMudXNlKFZlYW1zVmVudCwge1xuXHRcdGZ1cnRoZXJFdmVudHM6IEVWRU5UU1xuXHR9KTtcblxuXHQvLyBMb2dnZXIgUGx1Z2luIGZvciBkZXZtb2RlIGFuZCBsb2dnZXJcblx0VmVhbXMudXNlKFZlYW1zTG9nZ2VyKTtcblxuXHQvLyBNb2R1bGUgU3lzdGVtIFBsdWdpblxuXHRWZWFtcy51c2UoVmVhbXNNb2R1bGVzLCB7XG5cdFx0dXNlTXV0YXRpb25PYnNlcnZlcjogdHJ1ZSxcblx0XHRpbnRlcm5hbENhY2hlT25seTogZmFsc2Vcblx0fSk7XG5cblx0Ly8gTWVkaWEgUXVlcnkgSGFuZGxlciBQbHVnaW5cblx0VmVhbXMudXNlKFZlYW1zTWVkaWFRdWVyeUhhbmRsZXIpO1xufSk7XG5cbmV4cG9ydCB7QXBwLCBWZWFtc307Il19
