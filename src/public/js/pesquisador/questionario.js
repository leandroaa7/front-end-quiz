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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/views-controller/pesquisador/questionario.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/views-controller/new/Alternativa.js":
/*!*************************************************!*\
  !*** ./src/views-controller/new/Alternativa.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AlternativaController; });\n/* harmony import */ var _Container_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container.controller */ \"./src/views-controller/new/Container.controller.js\");\n/* harmony import */ var _List_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.controller */ \"./src/views-controller/new/List.controller.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar AlternativaController = function AlternativaController() {\n  var _this = this;\n\n  _classCallCheck(this, AlternativaController);\n\n  _defineProperty(this, \"goToAdd\", function () {\n    var urlAction = \"/alternativa/\";\n    var method = \"POST\";\n\n    _this.container.goToAdd(urlAction, method);\n  });\n\n  _defineProperty(this, \"goToUpdate\", function (event) {\n    var urlAction = \"/questionario/atualizar\";\n    var method = \"POST\";\n\n    var dataList = _this.list.getDataAttributesOfList(event);\n\n    _this.container.goToUpdate(urlAction, method, dataList);\n  });\n\n  this.container = new _Container_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"alternativa\", [\"id\", \"titulo\", \"peso\"]);\n  var ulId = \"alternativas\";\n  var liAttributesList = [\"data-id\", \"data-titulo\", \"data-peso\"];\n  this.list = new _List_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ulId, liAttributesList);\n};\n\n\n\n//# sourceURL=webpack:///./src/views-controller/new/Alternativa.js?");

/***/ }),

/***/ "./src/views-controller/new/Container.controller.js":
/*!**********************************************************!*\
  !*** ./src/views-controller/new/Container.controller.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Container; });\n/* harmony import */ var _Form_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.controller */ \"./src/views-controller/new/Form.controller.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n //abstract\n\nvar Container = function Container(name, inputIdList) {\n  var _this = this;\n\n  _classCallCheck(this, Container);\n\n  _defineProperty(this, \"showContainer\", function () {\n    _this.container.removeAttribute('hidden');\n  });\n\n  _defineProperty(this, \"hideContainer\", function () {\n    _this.container.setAttribute('hidden', '');\n  });\n\n  _defineProperty(this, \"goToContainer\", function () {\n    window.scroll(_this.container.offsetLeft, _this.container.offsetTop);\n  });\n\n  _defineProperty(this, \"prepareForm\", function (action, method) {\n    _this.showContainer();\n\n    _this.form.setAction(action);\n\n    _this.form.setMethod(method);\n  });\n\n  _defineProperty(this, \"goToAdd\", function (action, method) {\n    _this.prepareForm(action, method);\n\n    _this.form.clearForm();\n\n    _this.prepareButtonsToAdd();\n\n    _this.goToContainer();\n  });\n\n  _defineProperty(this, \"prepareButtonsToAdd\", function () {\n    _this.btnCadastrar.classList.remove('hide');\n\n    _this.btnAlterar.classList.add('hide');\n\n    _this.btnExcluir.classList.add('hide');\n  });\n\n  _defineProperty(this, \"goToUpdate\", function (action, method, dataList) {\n    _this.prepareForm(action, method);\n\n    _this.form.setDataListIntoInputs(dataList);\n\n    _this.prepareButtonsToUpdate();\n\n    _this.goToContainer();\n  });\n\n  _defineProperty(this, \"prepareButtonsToUpdate\", function () {\n    _this.btnAlterar.classList.remove('hide');\n\n    _this.btnExcluir.classList.remove('hide');\n\n    _this.btnCadastrar.classList.add('hide');\n  });\n\n  _defineProperty(this, \"goToDelete\", function (action, method) {\n    _this.form.setAction(action);\n\n    _this.form.setMethod(method);\n\n    _this.formAlert.classList.remove('hide');\n\n    window.scroll(0, document.body.scrollHeight);\n  });\n\n  _defineProperty(this, \"goToDeleteCancel\", function () {\n    _this.formAlert.classList.add('hide');\n  });\n\n  this.name = name;\n  this.container = document.getElementById('container-' + name);\n  this.form = new _Form_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.getElementById('form-' + name), inputIdList);\n  this.formAlert = document.getElementById(\"form-alert\"); //buttons form\n\n  this.buttons = document.getElementById('btn-' + name).children;\n  this.btnExcluir = this.buttons[\"excluir\"];\n  this.btnAlterar = this.buttons['alterar'];\n  this.btnCadastrar = this.buttons[\"cadastrar\"];\n}\n/**Remove hidden attribute */\n;\n\n\n\n//# sourceURL=webpack:///./src/views-controller/new/Container.controller.js?");

/***/ }),

/***/ "./src/views-controller/new/Form.controller.js":
/*!*****************************************************!*\
  !*** ./src/views-controller/new/Form.controller.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FormController; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar FormController = function FormController(_form, inputIdList) {\n  var _this = this;\n\n  _classCallCheck(this, FormController);\n\n  _defineProperty(this, \"clearForm\", function () {\n    _this.form.reset();\n  });\n\n  _defineProperty(this, \"setAction\", function (action) {\n    _this.form.action = action;\n  });\n\n  _defineProperty(this, \"setMethod\", function (method) {\n    _this.form.method = method;\n  });\n\n  _defineProperty(this, \"injectInputs\", function (idInputInject, idForm) {\n    var inject = document.getElementById(idInputInject);\n    inject.removeAttribute('id');\n    var form = document.getElementById(idForm);\n    form.insertBefore(inject, form.childNodes[0]);\n  });\n\n  _defineProperty(this, \"setDataListIntoInputs\", function (dataList) {\n    _this.inputIdList.forEach(function (el, i) {\n      _this.form[el].classList.add('active');\n\n      _this.form[el].value = dataList[i];\n    });\n  });\n\n  _defineProperty(this, \"addForm\", function (idFormInject, form) {\n    var formToInject = document.getElementById(idFormInject);\n    form.insertBefore(formToInject, form.childNodes[0]);\n  });\n\n  this.form = _form;\n  this.inputIdList = inputIdList;\n}\n/** clear all inputs*/\n;\n\n\n\n//# sourceURL=webpack:///./src/views-controller/new/Form.controller.js?");

/***/ }),

/***/ "./src/views-controller/new/List.controller.js":
/*!*****************************************************!*\
  !*** ./src/views-controller/new/List.controller.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return List; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar List = // recebe o id do elemento <ul> \n// e os atributos de um li, exemplo <li data-peso=\"peso3\">\nfunction List(ulId, liAttributesList) {\n  var _this = this;\n\n  _classCallCheck(this, List);\n\n  _defineProperty(this, \"getDataAttributesOfList\", function (event) {\n    var dataList = [];\n\n    if (event.target.tagName == \"LI\") {\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = _this.liAttributesList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var attribute = _step.value;\n          dataList.push(event.target.getAttribute(attribute));\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      return dataList;\n    }\n  });\n\n  this.ulId = ulId;\n  this.ulObject = document.getElementById(ulId);\n  this.liList = Array.from(this.ulObject.children);\n  this.liAttributesList = liAttributesList;\n};\n\n\n\n//# sourceURL=webpack:///./src/views-controller/new/List.controller.js?");

/***/ }),

/***/ "./src/views-controller/new/Questao.js":
/*!*********************************************!*\
  !*** ./src/views-controller/new/Questao.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Questao; });\n/* harmony import */ var _Container_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container.controller */ \"./src/views-controller/new/Container.controller.js\");\n/* harmony import */ var _Alternativa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alternativa */ \"./src/views-controller/new/Alternativa.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar Questao = function Questao() {\n  var _this = this;\n\n  _classCallCheck(this, Questao);\n\n  _defineProperty(this, \"goToAdd\", function () {\n    _this.hideContainerAlternative();\n\n    var urlAction = \"/questionario/\";\n    var method = \"POST\";\n\n    _this.showFormAlternativa();\n\n    _this.container.goToAdd(urlAction, method);\n  });\n\n  _defineProperty(this, \"goToUpdate\", function (event) {\n    var target = event.target;\n\n    if (target.attributes[\"data-questao\"]) {\n      _this.hideContainerAlternative();\n\n      var urlAction = \"/questionario/atualizar\";\n      var method = \"POST\";\n\n      var dataList = _this.getDataList(target);\n\n      _this.hideFormAlternativa();\n\n      _this.container.goToUpdate(urlAction, method, dataList);\n    }\n  });\n\n  _defineProperty(this, \"getDataList\", function (target) {\n    var dataList = [];\n    var idQuestao = target.dataset['id'];\n    dataList.push(idQuestao);\n    var elementWithTittle = \"titulo\" + idQuestao;\n    var titulo = document.getElementById(elementWithTittle).innerText;\n    dataList.push(titulo);\n    return dataList;\n  });\n\n  _defineProperty(this, \"hideContainerAlternative\", function () {\n    _this.alternativaController.container.hideContainer();\n  });\n\n  _defineProperty(this, \"hideContainerQuestao\", function () {\n    _this.container.hideContainer();\n  });\n\n  _defineProperty(this, \"showFormAlternativa\", function () {\n    _this.formAlternativa.removeAttribute('hidden'); //set required\n\n\n    _this.formAlternativa.querySelectorAll('input').forEach(function (el) {\n      el.setAttribute('required', '');\n    });\n  });\n\n  _defineProperty(this, \"hideFormAlternativa\", function () {\n    _this.formAlternativa.setAttribute('hidden', ''); //set required\n\n\n    _this.formAlternativa.querySelectorAll('input').forEach(function (el) {\n      el.removeAttribute('required');\n    });\n  });\n\n  _defineProperty(this, \"goToAddAlternative\", function () {\n    _this.hideContainerQuestao();\n\n    _this.alternativaController.goToAdd();\n  });\n\n  _defineProperty(this, \"goToUpdateAlternative\", function (event) {\n    _this.hideContainerQuestao();\n\n    _this.alternativaController.goToUpdate(event);\n  });\n\n  _defineProperty(this, \"administrateAlternative\", function (event) {\n    var target = event.target;\n\n    if (target.tagName == \"BUTTON\") {\n      if (target.dataset.action == \"excluir\" || target.dataset.actionAlternativa == \"excluir\") {\n        _this.excludeAlternative(target);\n      } else if (target.dataset.actionAlternativa == \"cadastrar\") {\n        _this.addAlternative(target);\n      }\n\n      _this.validateAlternative();\n    }\n  });\n\n  _defineProperty(this, \"excludeAlternative\", function (target) {\n    var alternative = target.parentNode;\n    var alternativeList = alternative.parentNode;\n    alternativeList.removeChild(alternative);\n  });\n\n  _defineProperty(this, \"addAlternative\", function (target) {\n    var buttonAdd = target.parentNode;\n\n    var model = _this.alternativeModel.cloneNode(true);\n\n    _this.formAlternativa.removeChild(buttonAdd);\n\n    _this.formAlternativa.append(model);\n\n    _this.formAlternativa.appendChild(buttonAdd);\n  });\n\n  _defineProperty(this, \"validateAlternative\", function () {\n    var alternatives = document.querySelectorAll('.new-alternativa');\n    var alert = document.getElementById('alert-alternativa'); //é necessário ter 2 alternátivas fora a model localizada pelo querySelectorAll\n\n    if (alternatives.length > 2) {\n      alert.setAttribute('hidden', '');\n\n      _this.container.btnCadastrar.classList.remove('disabled');\n    } else {\n      alert.removeAttribute('hidden');\n\n      _this.container.btnCadastrar.classList.add('disabled');\n    }\n  });\n\n  this.container = new _Container_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"questao\", [\"id\", \"titulo\"]);\n  this.alternativaController = new _Alternativa__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  this.formAlternativa = document.getElementById('form-questao-alternativa');\n  this.alternativeModel = document.getElementById('alternativa-model').children[0];\n};\n\n\n\n//# sourceURL=webpack:///./src/views-controller/new/Questao.js?");

/***/ }),

/***/ "./src/views-controller/pesquisador/questionario.js":
/*!**********************************************************!*\
  !*** ./src/views-controller/pesquisador/questionario.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _new_Questao__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../new/Questao */ \"./src/views-controller/new/Questao.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var elems = document.querySelectorAll('.collapsible');\n  M.Collapsible.init(elems);\n  var questaoController = new _new_Questao__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); //questao\n\n  document.getElementById('new-questao').addEventListener('click', questaoController.goToAdd);\n  document.getElementById('questoes').addEventListener('click', questaoController.goToUpdate); //alternativa\n\n  document.getElementById('new-alternativa').addEventListener('click', questaoController.goToAddAlternative);\n  document.getElementById('alternativas').addEventListener('click', questaoController.goToUpdateAlternative);\n  document.getElementById('form-questao-alternativa').addEventListener('click', questaoController.administrateAlternative);\n});\n\n//# sourceURL=webpack:///./src/views-controller/pesquisador/questionario.js?");

/***/ })

/******/ });