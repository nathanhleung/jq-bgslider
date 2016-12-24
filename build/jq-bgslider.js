(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jqBgslider"] = factory();
	else
		root["jqBgslider"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* global jQuery */

	/**
	 * Initializes the background slider
	 * @param {array} options.images - The images to be used in the slider
	 * @param {string} options.selector - The selector for the element to apply the background to
	 * @param {number} options.slideDuration - The time each image is displayed before being slid over
	 */

	/* eslint-disable import/no-extraneous-dependencies */
	/* eslint-disable import/no-unresolved */
	/* eslint-disable import/no-webpack-loader-syntax */
	var sliderCss = __webpack_require__(1);
	/* eslint-enable */
	/* eslint-enable */
	/* eslint-enable */

	function jqBgslider() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      _ref$images = _ref.images,
	      images = _ref$images === undefined ? ['https://i.imgur.com/gz0Yq3E.jpg', 'https://i.imgur.com/e3Fjb93.jpg', 'https://i.imgur.com/8FoJQYg.jpg', 'https://i.imgur.com/PCmutZb.jpg'] : _ref$images,
	      _ref$selector = _ref.selector,
	      selector = _ref$selector === undefined ? 'body' : _ref$selector,
	      _ref$animDuration = _ref.animDuration,
	      animDuration = _ref$animDuration === undefined ? 1000 : _ref$animDuration,
	      _ref$slideDuration = _ref.slideDuration,
	      slideDuration = _ref$slideDuration === undefined ? 5000 : _ref$slideDuration;

	  if (typeof jQuery === 'undefined') {
	    throw new Error('jq-bgslider requires jQuery');
	  }
	  var $ = jQuery;
	  // Add required css
	  $('head').append('<style>' + sliderCss + '</style>');
	  if (images.length < 2) {
	    jQuery.error('You must provide at least two images to slide through.');
	  }
	  if (slideDuration < animDuration * 1.5) {
	    jQuery.error('The slide duration must be at least 50% longer than the animation duration.');
	  }
	  if (images.length < 2) {
	    jQuery.error('You must select at least two images.');
	  }
	  // For each image, append it to the body
	  images.forEach(function (image, i) {
	    $(selector).append('<div class="bg-slider-img", id="img' + i + '"></div>');
	    $('#img' + i).css('background-image', 'url("' + image + '")');
	    // Image 1 is at 0%, image 2 is at 100%
	    if (i < 2) {
	      $('#img' + i).css('left', 100 * i + '%');
	    } else {
	      // Rest of images are at 200%
	      $('#img' + i).css('left', '200%');
	    }
	  });
	  // Keep track of how many times we've called changePic without a reset
	  var counter = 0;
	  function changePic() {
	    // Counter value is index of current image
	    var nextImage = counter + 1;
	    var stagedImage = counter + 2;
	    if (nextImage >= images.length) {
	      nextImage -= images.length;
	    }
	    if (stagedImage >= images.length) {
	      stagedImage -= images.length;
	    }
	    // Slide current image to -100%
	    $('#img' + counter).animate({
	      left: '-100%'
	    }, {
	      duration: animDuration,
	      queue: false,
	      complete: function complete() {
	        // Once current image animation is done, put it back to 200%
	        $('#img' + counter).css('left', '200%');
	      }
	    });
	    // Slide next image to 0%;
	    $('#img' + nextImage).animate({
	      left: '0%'
	    }, {
	      duration: animDuration,
	      queue: false,
	      complete: function complete() {
	        // Put staged image at 100%;
	        $('#img' + stagedImage).css('left', '100%');
	        counter = nextImage;
	      }
	    });
	  }
	  setInterval(changePic, slideDuration);
	}

	exports.default = jqBgslider;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = "html {\n  overflow-x: hidden;\n}\nbody {\n  position: relative;\n  overflow-x: hidden;\n}\n.bg-slider-img {\n  position: fixed;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100%;\n  background-size: cover;\n}\n"

/***/ }
/******/ ])
});
;