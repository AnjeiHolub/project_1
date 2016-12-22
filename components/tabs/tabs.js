(function (){
  'use strict';

  let tabsTmpl = window.tabsTmpl;

  class Tabs {
    constructor ({elem, data, renderMenu}) {
      this._elem = elem;
      this._data = data;
      this._renderMenu = renderMenu;
      this._indexDisplayTab = 0;
      this._tabsTmpl = tabsTmpl;
      this._onClick = this._onClick.bind(this);
      this._render();
      this._initEvent();
    }

  _render () {
    this._elem.innerHTML = this._tabsTmpl({items: this._data, indexDisplayTab: this._indexDisplayTab});
  }

   _initEvent () {
    this._elem.addEventListener('click', this._onClick);
  }

  _onClick (event) {
    let target = event.target;
    if (target.id === 'tab__add') this._onAddTab();
    if (target.getAttribute('name') === 'list') this._onPickTab(target);
  }

  _onAddTab () {
    let data = {};
    let title = prompt('Заголовок новой закладки');
    if (title) {
      this._createDataTab(title);
    }
  }

  _createDataTab (title) {
    data.title = title;
    data.items= [];
    this._data.push(data);
    this._render();
    data = {};
  }

  _onPickTab (target) {
    this._indexDisplayTab = +target.id;
    this._renderMenu(this._indexDisplayTab);
  }

  }

  window.Tabs = Tabs; //export
})();