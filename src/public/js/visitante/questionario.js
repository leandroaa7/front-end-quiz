/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/views-controller/visitante/questionario.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/views-controller/Animate.js":
/*!*****************************************!*\
  !*** ./src/views-controller/Animate.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Animate = function Animate() {\n  var _this = this;\n\n  _classCallCheck(this, Animate);\n\n  _defineProperty(this, \"removerClasses\", function (elemento, classe, range) {\n    var classes = Array.from(elemento.classList);\n    console.log(classes);\n\n    if (range == true) {\n      var elementosARemover = classes.slice(classes.indexOf(classe));\n      console.log('toRemove');\n      console.log(elementosARemover);\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = elementosARemover[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var elementoARemover = _step.value;\n          elemento.classList.remove(elementoARemover);\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    } else {\n      elemento.classList.remove(classe);\n    }\n  });\n\n  _defineProperty(this, \"transition\", function (idElementToShow, idElementToHide) {\n    var animationInShow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"fadeInRightBig\";\n    var animationInHide = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"fadeOutLeftBig\";\n    var elementToShow, elementToHide;\n    elementToShow = document.getElementById(idElementToShow);\n    elementToHide = document.getElementById(idElementToHide);\n\n    _this.removerClasses(elementToHide, 'animated', true);\n\n    elementToHide.classList.add('animated', animationInHide);\n    elementToHide.setAttribute('hidden', '');\n\n    _this.removerClasses(elementToShow, 'animated', true);\n\n    elementToShow.classList.add('animated', animationInShow);\n    elementToShow.removeAttribute('hidden', '');\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Animate);\n\n//# sourceURL=webpack:///./src/views-controller/Animate.js?");

/***/ }),

/***/ "./src/views-controller/new/Questionario.js":
/*!**************************************************!*\
  !*** ./src/views-controller/new/Questionario.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Questionario; });\n/* harmony import */ var _Animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Animate */ \"./src/views-controller/Animate.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Questionario = function Questionario(qtdQuestao) {\n  var _this = this;\n\n  _classCallCheck(this, Questionario);\n\n  _defineProperty(this, \"alertar\", function (mensagem) {\n    _this.alert.removeAttribute('hidden');\n\n    _this.alertMessage.innerHTML = mensagem;\n  });\n\n  _defineProperty(this, \"ocultarAlerta\", function () {\n    _this.alert.setAttribute('hidden', '');\n  });\n\n  _defineProperty(this, \"voltar\", function () {\n    var questaoIndex = _this.btnVoltar.dataset.index * 1;\n\n    if (questaoIndex == 1) {\n      _this.alertar(\"Atenção: esta é a primeira questão\");\n    } else {\n      if (_this.btnVoltar.dataset.index == _this.qtdQuestao) {\n        _this.btnFinalizar.classList.add('hide');\n\n        _this.btnAvancar.classList.remove('hide');\n      }\n\n      _this.btnAvancar.dataset.index = questaoIndex * 1 - 1;\n      _this.btnVoltar.dataset.index = questaoIndex * 1 - 1;\n\n      _this.animarVoltar(questaoIndex);\n\n      _this.ocultarAlerta();\n    }\n  });\n\n  _defineProperty(this, \"avancar\", function () {\n    var questaoIndex = _this.btnAvancar.dataset.index * 1;\n\n    if (questaoIndex == _this.qtdQuestao) {\n      if (_this.validarQuestao(questaoIndex) == true) {\n        _this.ocultarAlerta();\n\n        _this.btnAvancar.classList.add('hide');\n\n        _this.btnFinalizar.classList.remove('hide');\n\n        _this.alertar(\"Atenção, as perguntas acabaram, gostaria de finalizar o questionário?\");\n      } else {\n        _this.alertar('Atenção, selecione uma alternativa por favor');\n      }\n    } else {\n      if (_this.validarQuestao(questaoIndex) == true) {\n        _this.animarAvancar(questaoIndex);\n\n        _this.ocultarAlerta();\n\n        _this.acrescentarIndex(questaoIndex);\n      } else {\n        _this.alertar('Atenção, selecione uma alternativa por favor');\n      }\n    }\n  });\n\n  _defineProperty(this, \"acrescentarIndex\", function (questaoIndex) {\n    questaoIndex = questaoIndex * 1 + 1;\n    _this.btnVoltar.dataset.index = questaoIndex;\n    _this.btnAvancar.dataset.index = questaoIndex;\n  });\n\n  _defineProperty(this, \"animarAvancar\", function (questaoIndex) {\n    var sectionToHide = \"questao-section-\" + questaoIndex;\n    var sectionToShow = 'questao-section-' + (questaoIndex + 1);\n\n    _this.animate.transition(sectionToShow, sectionToHide);\n  });\n\n  _defineProperty(this, \"animarVoltar\", function (questaoIndex) {\n    var sectionToHide = \"questao-section-\" + questaoIndex;\n    var sectionToShow = 'questao-section-' + (questaoIndex - 1);\n\n    _this.animate.transition(sectionToShow, sectionToHide);\n  });\n\n  _defineProperty(this, \"validarQuestao\", function (questaoIndex) {\n    var isValid = false;\n    var questao = \"questao-radio-\" + questaoIndex;\n    questao = document.getElementById(questao).querySelectorAll('input');\n    questao.forEach(function (el) {\n      if (el.checked) {\n        isValid = true;\n      }\n    });\n    return isValid;\n  });\n\n  this.qtdQuestao = qtdQuestao;\n  this.btnVoltar = document.getElementById('voltar');\n  this.btnAvancar = document.getElementById('avancar');\n  this.btnFinalizar = document.getElementById('finalizar');\n  this.alert = document.getElementById('alerta');\n  this.alertMessage = document.getElementById('alerta-message');\n  this.animate = new _Animate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n};\n\n\n\n//# sourceURL=webpack:///./src/views-controller/new/Questionario.js?");

/***/ }),

/***/ "./src/views-controller/visitante/questionario.js":
/*!********************************************************!*\
  !*** ./src/views-controller/visitante/questionario.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _new_Questionario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../new/Questionario */ \"./src/views-controller/new/Questionario.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var questionario = new _new_Questionario__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2);\n  document.getElementById('voltar').addEventListener('click', questionario.voltar);\n  document.getElementById('avancar').addEventListener('click', questionario.avancar);\n});\n\n//# sourceURL=webpack:///./src/views-controller/visitante/questionario.js?");

/***/ })

/******/ });