/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var formTmpl = window.formTmpl;

var Form = function () {
  function Form(_ref) {
    var elem = _ref.elem,
        submit = _ref.submit;

    _classCallCheck(this, Form);

    this._elem = elem;
    this._submit = submit;
    this._formTmpl = formTmpl;
    this._onSubmit = this._onSubmit.bind(this);
    this.render();
    this._form = this._elem.querySelector('form');
    this._eventInit();
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      this._elem.innerHTML = this._formTmpl();
    }
  }, {
    key: '_eventInit',
    value: function _eventInit() {
      this._elem.addEventListener('submit', this._onSubmit);
    }
  }, {
    key: '_getValueForm',
    value: function _getValueForm(name) {
      return this._elem.querySelector('[name=' + name).value;
    }
  }, {
    key: '_onSubmit',
    value: function _onSubmit(event) {
      event.preventDefault();

      this.trigger('add', {
        href: this._getValueForm('url'),
        anchor: this._getValueForm('anchor'),
        details: this._getValueForm('details')
      });

      this._form.reset();
    }
  }, {
    key: 'on',
    value: function on(name, callback) {
      this._elem.addEventListener(name, callback);
    }

    /**
     * Создаем и диспатчим событие
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */

  }, {
    key: 'trigger',
    value: function trigger(name, data) {
      var widgetEvent = new CustomEvent(name, {
        bubbles: true,
        detail: data
      });

      this._elem.dispatchEvent(widgetEvent);
    }
  }]);

  return Form;
}();

exports.Form = Form;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var menuTmpl = window.menuTmpl;

var Menu = function () {
  /**
   * Create a Menu.
   * @param {Object} elem
   * @param {Array} data
   */
  function Menu(_ref) {
    var elem = _ref.elem,
        _ref$data = _ref.data,
        data = _ref$data === undefined ? [{ items: [], title: 'Пробная закладка' }] : _ref$data;

    _classCallCheck(this, Menu);

    this._elem = elem;
    this._data = data;
    console.log(this._data);
    this._indexDisplayData = 0;
    this.menuTmpl = menuTmpl;
    this.addList = this.addList.bind(this);
    this._onClick = this._onClick.bind(this);
    /*this._render();*/
    this._eventInit();
  }

  _createClass(Menu, [{
    key: 'setData',
    value: function setData(data) {
      this._data = data;
    }
  }, {
    key: 'getData',
    value: function getData() {
      return this._data;
    }
  }, {
    key: '_render',
    value: function _render(index) {
      if (index !== undefined) this._indexDisplayData = index;
      this._elem.innerHTML = this.menuTmpl(this._data[this._indexDisplayData]);
    }
  }, {
    key: '_eventInit',
    value: function _eventInit() {
      this._elem.addEventListener('click', this._onClick);
    }
  }, {
    key: '_onClick',
    value: function _onClick(event) {
      switch (event.target.dataset.action) {
        case 'close':
          this._onCloseClick(event);
          break;
        case 'pick':
          this._onPickClick(event);
          break;
      }
    }
  }, {
    key: 'addList',
    value: function addList(item) {
      if (this._data[this._indexDisplayData].items === undefined) this._data[this._indexDisplayData].items = [];
      this._data[this._indexDisplayData].items.push(item);
      this._render();
    }
  }, {
    key: 'removeList',
    value: function removeList(target) {
      this._data[this._indexDisplayData].items = this._data[this._indexDisplayData].items.filter(function (item, index) {
        return target.dataset.index != index;
      });
      this.trigger('remove', this._data);
      this._render();
    }
  }, {
    key: 'on',
    value: function on(name, callback) {
      this._elem.addEventListener(name, callback);
    }
  }, {
    key: 'trigger',
    value: function trigger(name, data) {
      var widgetEvent = new CustomEvent(name, {
        bubbles: true,
        detail: data
      });

      this._elem.dispatchEvent(widgetEvent);
    }
  }, {
    key: '_onCloseClick',
    value: function _onCloseClick(event) {
      var target = event.target;
      while (target !== this) {
        if (target.classList.contains('menu__item')) break;
        target = target.parentNode;
      }
      if (!target.classList.contains('menu__item')) return;
      this.removeList(target);
    }
  }, {
    key: '_onPickClick',
    value: function _onPickClick(event) {
      event.preventDefault();
    }
  }]);

  return Menu;
}();

exports.Menu = Menu;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model(_ref) {
    var _ref$resources = _ref.resources,
        resources = _ref$resources === undefined ? 'https://components-25771.firebaseio.com/menu.json' : _ref$resources;

    _classCallCheck(this, Model);

    this._resources = resources;
    this._handlers = {};
    console.log(this._resources);
  }

  _createClass(Model, [{
    key: 'setData',
    value: function setData(data) {
      this._data = data;
      this.trigger('update', this._data);
    }
  }, {
    key: 'getData',
    value: function getData() {
      return this._data;
    }
  }, {
    key: 'save',
    value: function save() {
      this._makeRequest('PUT', this._resources);
    }
  }, {
    key: 'fetch',
    value: function fetch() {
      this._makeRequest('GET', this._resources);
    }
  }, {
    key: 'on',
    value: function on(name, cb) {
      if (!this._handlers[name]) {
        this._handlers[name] = [];
      }

      this._handlers[name].push(cb);
    }
  }, {
    key: 'trigger',
    value: function trigger(name, data) {
      if (this._handlers[name]) {
        this._handlers[name].forEach(function (callback) {
          return callback(data);
        });
      }
    }
  }, {
    key: '_makeRequest',
    value: function _makeRequest(method, resources) {
      var _this = this;

      var xhr = new XMLHttpRequest();
      xhr.open(method, resources, false);
      console.log(xhr);

      xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === 4) {
          var data = JSON.parse(xhr.responseText);

          if (method === 'GET') {
            _this.trigger('fetch', xhr);
            _this.setData(data);
          }
        }
      });
      console.log(JSON.stringify(this._data));
      if (method === 'PUT') {
        xhr.send(JSON.stringify(this._data));
      } else {
        xhr.send();
      }
    }
  }]);

  return Model;
}();

exports.Model = Model;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tabsTmpl = window.tabsTmpl;

var Tabs = function () {
  function Tabs(_ref) {
    var elem = _ref.elem,
        renderMenu = _ref.renderMenu;

    _classCallCheck(this, Tabs);

    this._elem = elem;
    this._renderMenu = renderMenu;
    this._indexDisplayTab = 0;
    this._tabsTmpl = tabsTmpl;
    this._onClick = this._onClick.bind(this);
    this._initEvent();
  }

  _createClass(Tabs, [{
    key: 'setData',
    value: function setData(data) {
      this._data = data;
    }
  }, {
    key: '_render',
    value: function _render() {
      this._elem.innerHTML = this._tabsTmpl({ items: this._data, indexDisplayTab: this._indexDisplayTab });
    }
  }, {
    key: '_initEvent',
    value: function _initEvent() {
      this._elem.addEventListener('click', this._onClick);
    }
  }, {
    key: '_onClick',
    value: function _onClick(event) {
      var target = event.target;
      if (target.id === 'tab__add') this._onAddTab();
      if (target.getAttribute('name') === 'list') this._onPickTab(target);
    }
  }, {
    key: '_onAddTab',
    value: function _onAddTab() {
      var title = prompt('Заголовок новой закладки');
      if (title) {
        this._createDataTab(title);
      }
    }
  }, {
    key: '_createDataTab',
    value: function _createDataTab(title) {
      var data = {};
      data.items = [];
      data.title = title;
      this._data.push(data);
      this.trigger('add', {
        items: [],
        title: data.title
      });
      this._render();
      data = {};
    }
  }, {
    key: '_onPickTab',
    value: function _onPickTab(target) {
      this._indexDisplayTab = +target.id;
      this._renderMenu(this._indexDisplayTab);
    }
  }, {
    key: 'on',
    value: function on(name, callback) {
      this._elem.addEventListener(name, callback);
    }
  }, {
    key: 'trigger',
    value: function trigger(name, data) {
      var widgetEvent = new CustomEvent(name, {
        bubbles: true,
        detail: data
      });

      this._elem.dispatchEvent(widgetEvent);
    }
  }]);

  return Tabs;
}();

exports.Tabs = Tabs;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _menu = __webpack_require__(1);

var _form = __webpack_require__(0);

var _tabs = __webpack_require__(3);

var _model = __webpack_require__(2);

var menuModel = new _model.Model({
  resources: 'https://components-25771.firebaseio.com/menu.json'
});

var menu = new _menu.Menu({
  elem: document.querySelector('.js-menu')
});

var tabs = new _tabs.Tabs({
  elem: document.querySelector('.js-tabs'),
  renderMenu: function renderMenu(index) {
    menu._render(index);
  }
});

var form = new _form.Form({
  elem: document.querySelector('.js-form'),
  submit: function submit(item) {
    menu.addList(item);
  }
});

menuModel.on('update', function (data) {
  tabs.setData(data);
  menu.setData(data);
  menu._render();
  tabs._render();
});

form.on('add', function (event) {
  menu.addList(event.detail); // обновляю интерфейс

  menuModel.setData(menu.getData()); // обновляю данные в моделе
  menuModel.save(); // сохраняю изменения на сервере
});

tabs.on('add', function (event) {
  menuModel.setData(menu.getData()); // обновляю данные в моделе
  menuModel.save(); // сохраняю изменения на сервере
});

menu.on('remove', function (event) {
  menuModel.setData(menu.getData()); // обновляю данные в моделе
  menuModel.save(); // сохраняю изменения на сервере
});

menuModel.fetch();

window.menu = menu;
window.tabs = tabs;
window.form = form;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map