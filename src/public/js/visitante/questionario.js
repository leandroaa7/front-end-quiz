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
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Animate = function Animate() {\n  var _this = this;\n\n  _classCallCheck(this, Animate);\n\n  _defineProperty(this, \"removerClasses\", function (elemento, classe, range) {\n    var classes = Array.from(elemento.classList);\n\n    if (range == true) {\n      var elementosARemover = classes.slice(classes.indexOf(classe));\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = elementosARemover[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var elementoARemover = _step.value;\n          elemento.classList.remove(elementoARemover);\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    } else {\n      elemento.classList.remove(classe);\n    }\n  });\n\n  _defineProperty(this, \"transition\", function (idElementToShow, idElementToHide) {\n    var animationInShow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"fadeInRightBig\";\n    var animationInHide = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"fadeOutLeftBig\";\n    var elementToShow, elementToHide;\n    elementToShow = document.getElementById(idElementToShow);\n    elementToHide = document.getElementById(idElementToHide);\n\n    _this.removerClasses(elementToHide, 'animated', true);\n\n    elementToHide.classList.add('animated', animationInHide);\n    elementToHide.setAttribute('hidden', '');\n\n    _this.removerClasses(elementToShow, 'animated', true);\n\n    elementToShow.classList.add('animated', animationInShow);\n    elementToShow.removeAttribute('hidden', '');\n    window.scroll(elementToShow.offsetLeft, elementToShow.offsetTop);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Animate);\n\n//# sourceURL=webpack:///./src/views-controller/Animate.js?");

/***/ }),

/***/ "./src/views-controller/new/Questionario.js":
/*!**************************************************!*\
  !*** ./src/views-controller/new/Questionario.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Questionario; });\n/* harmony import */ var _Animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Animate */ \"./src/views-controller/Animate.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Questionario = function Questionario(qtdQuestao) {\n  var _this = this;\n\n  _classCallCheck(this, Questionario);\n\n  _defineProperty(this, \"alertar\", function (mensagem) {\n    _this.alert.removeAttribute('hidden');\n\n    _this.alertMessage.innerHTML = mensagem;\n    window.scroll(_this.alertMessage.offsetLeft, _this.alertMessage.offsetTop);\n  });\n\n  _defineProperty(this, \"ocultarAlerta\", function () {\n    _this.alert.setAttribute('hidden', '');\n  });\n\n  _defineProperty(this, \"voltar\", function () {\n    var questaoIndex = _this.btnVoltar.dataset.index * 1;\n\n    if (questaoIndex == 0) {\n      _this.alertar(\"Atenção: esta é a primeira questão\");\n    } else {\n      if (_this.btnVoltar.dataset.index == _this.qtdQuestao * 1) {\n        _this.btnFinalizar.classList.add('hide');\n\n        _this.btnAvancar.classList.remove('hide');\n      }\n\n      _this.btnAvancar.dataset.index = questaoIndex * 1 - 1;\n      _this.btnVoltar.dataset.index = questaoIndex * 1 - 1;\n\n      _this.animarVoltar(questaoIndex);\n\n      _this.ocultarAlerta();\n    }\n  });\n\n  _defineProperty(this, \"avancar\", function () {\n    var questaoIndex = _this.btnAvancar.dataset.index * 1;\n\n    if (questaoIndex == _this.qtdQuestao) {\n      if (_this.validarQuestao(questaoIndex) == true) {\n        _this.ocultarAlerta();\n\n        _this.btnAvancar.classList.add('hide');\n\n        _this.btnFinalizar.classList.remove('hide');\n\n        _this.alertar(\"Atenção, as perguntas acabaram, gostaria de finalizar o questionário?\");\n\n        window.scroll(_this.btnFinalizar.offsetLeft, _this.btnFinalizar.offsetTop);\n      } else {\n        _this.alertar('Atenção, selecione uma alternativa por favor');\n      }\n    } else {\n      if (_this.validarQuestao(questaoIndex) == true) {\n        _this.animarAvancar(questaoIndex);\n\n        _this.ocultarAlerta();\n\n        _this.acrescentarIndex(questaoIndex);\n      } else {\n        _this.alertar('Atenção, selecione uma alternativa por favor');\n      }\n    }\n  });\n\n  _defineProperty(this, \"acrescentarIndex\", function (questaoIndex) {\n    questaoIndex = questaoIndex * 1 + 1;\n    _this.btnVoltar.dataset.index = questaoIndex;\n    _this.btnAvancar.dataset.index = questaoIndex;\n  });\n\n  _defineProperty(this, \"animarAvancar\", function (questaoIndex) {\n    var sectionToHide = \"questao-section-\" + questaoIndex;\n    var sectionToShow = 'questao-section-' + (questaoIndex + 1);\n\n    _this.animate.transition(sectionToShow, sectionToHide);\n  });\n\n  _defineProperty(this, \"animarVoltar\", function (questaoIndex) {\n    var sectionToHide = \"questao-section-\" + questaoIndex;\n    var sectionToShow = 'questao-section-' + (questaoIndex - 1);\n\n    _this.animate.transition(sectionToShow, sectionToHide);\n  });\n\n  _defineProperty(this, \"validarQuestao\", function (questaoIndex) {\n    var isValid = false;\n    var questao = \"questao-radio-\" + questaoIndex;\n    questao = document.getElementById(questao).querySelectorAll('input');\n    questao.forEach(function (el) {\n      if (el.checked) {\n        isValid = true;\n      }\n    });\n    return isValid;\n  });\n\n  _defineProperty(this, \"gerarFeedBack\", function () {\n    var respostaPorCategoria = {};\n    var categoriaList = [];\n    var respostaList = [];\n    var questao = []; //identificar categorias e extrair respostas\n\n    for (var i = 0; i <= _this.qtdQuestao; i++) {\n      questao = document.querySelector(\"#questao-radio-\".concat(i));\n\n      if (categoriaList.includes(questao.dataset.categoria) == false) {\n        categoriaList.push(questao.dataset.categoria);\n      }\n\n      questao.querySelectorAll('input').forEach(function (el) {\n        if (el.checked == true) {\n          respostaList.push({\n            categoria: questao.dataset.categoria,\n            resposta: el.value\n          });\n        }\n      });\n    } // agrupar respostas por categorias\n\n\n    for (var _i = 0, _categoriaList = categoriaList; _i < _categoriaList.length; _i++) {\n      var categoria = _categoriaList[_i];\n      respostaPorCategoria[categoria] = [];\n      var _iteratorNormalCompletion2 = true;\n      var _didIteratorError2 = false;\n      var _iteratorError2 = undefined;\n\n      try {\n        for (var _iterator2 = respostaList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n          var resposta = _step2.value;\n\n          if (resposta.categoria == categoria) {\n            respostaPorCategoria[categoria].push(resposta);\n          }\n        }\n      } catch (err) {\n        _didIteratorError2 = true;\n        _iteratorError2 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n            _iterator2[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError2) {\n            throw _iteratorError2;\n          }\n        }\n      }\n    }\n\n    var qtdRespostaCategoria = 0,\n        somaResposta = 0,\n        media = 0,\n        mediaCategoriaList = []; //calcular média\n\n    for (var _i2 = 0, _categoriaList2 = categoriaList; _i2 < _categoriaList2.length; _i2++) {\n      var _categoria = _categoriaList2[_i2];\n      var _iteratorNormalCompletion3 = true;\n      var _didIteratorError3 = false;\n      var _iteratorError3 = undefined;\n\n      try {\n        for (var _iterator3 = respostaList[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n          var _resposta = _step3.value;\n\n          if (_resposta.categoria == _categoria) {\n            qtdRespostaCategoria = qtdRespostaCategoria + 1;\n            somaResposta = somaResposta + parseInt(_resposta.resposta);\n          }\n        }\n      } catch (err) {\n        _didIteratorError3 = true;\n        _iteratorError3 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion3 && _iterator3[\"return\"] != null) {\n            _iterator3[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError3) {\n            throw _iteratorError3;\n          }\n        }\n      }\n\n      media = somaResposta / qtdRespostaCategoria;\n      mediaCategoriaList.push({\n        categoria: _categoria,\n        media: media\n      });\n      media = 0;\n      somaResposta = 0;\n      qtdRespostaCategoria = 0;\n    }\n\n    console.log(mediaCategoriaList); //gerar feedback\n\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = _this.recomendacaoList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var recomendacao = _step.value;\n        var _iteratorNormalCompletion4 = true;\n        var _didIteratorError4 = false;\n        var _iteratorError4 = undefined;\n\n        try {\n          for (var _iterator4 = mediaCategoriaList[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {\n            var _media = _step4.value;\n\n            if (recomendacao.dataset.categoria == _media.categoria) {\n              if (_media.media >= recomendacao.dataset.menorIntervalo && _media.media <= recomendacao.dataset.maiorIntervalo) {\n                recomendacao.removeAttribute('hidden');\n              }\n            }\n          }\n        } catch (err) {\n          _didIteratorError4 = true;\n          _iteratorError4 = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion4 && _iterator4[\"return\"] != null) {\n              _iterator4[\"return\"]();\n            }\n          } finally {\n            if (_didIteratorError4) {\n              throw _iteratorError4;\n            }\n          }\n        }\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n          _iterator[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n\n    var containerFeedback = document.getElementById('feedback');\n    containerFeedback.removeAttribute('hidden');\n    window.scroll(containerFeedback.offsetLeft, containerFeedback.offsetTop);\n  });\n\n  //soma-se um pois um elemento é retirado da lista\n  this.qtdQuestao = parseInt(qtdQuestao) + 1;\n  this.btnVoltar = document.getElementById('voltar');\n  this.btnAvancar = document.getElementById('avancar');\n  this.btnFinalizar = document.getElementById('finalizar');\n  this.alert = document.getElementById('alerta');\n  this.alertMessage = document.getElementById('alerta-message');\n  this.recomendacaoList = document.querySelectorAll('.feedback');\n  this.animate = new _Animate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n};\n\n\n\n//# sourceURL=webpack:///./src/views-controller/new/Questionario.js?");

/***/ }),

/***/ "./src/views-controller/visitante/questionario.js":
/*!********************************************************!*\
  !*** ./src/views-controller/visitante/questionario.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _new_Questionario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../new/Questionario */ \"./src/views-controller/new/Questionario.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var totalQuestao = document.getElementById('questionario-form').dataset.totalQuestao;\n  var questionario = new _new_Questionario__WEBPACK_IMPORTED_MODULE_0__[\"default\"](totalQuestao);\n  var questaoRadioList = document.querySelectorAll('.questao-radio');\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    var _loop = function _loop() {\n      var questao = _step.value;\n      //buscar todos os radio buttons para adicionar o número da questao\n      var index = questao.dataset.index;\n      questao.querySelectorAll('input').forEach(function (el) {\n        el.name = el.name + index;\n      });\n    };\n\n    for (var _iterator = questaoRadioList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      _loop();\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  document.getElementById('voltar').addEventListener('click', questionario.voltar);\n  document.getElementById('avancar').addEventListener('click', questionario.avancar);\n  document.getElementById(\"finalizar\").addEventListener('click', questionario.gerarFeedBack);\n});\n\n//# sourceURL=webpack:///./src/views-controller/visitante/questionario.js?");

/***/ })

/******/ });