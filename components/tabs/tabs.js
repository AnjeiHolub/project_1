(function (){
  'use strict';

  let tabsTmpl = window.tabsTmpl;

  class Tabs {
    constructor ({elem, renderMenu}) {
      this._elem = elem;
      this._renderMenu = renderMenu;
      this._indexDisplayTab = 0;
      this._tabsTmpl = tabsTmpl;
      this._onClick = this._onClick.bind(this);
      this._initEvent();
    }

    setData (data) {
      this._data = data;
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
      let title = prompt('Заголовок новой закладки');
      if (title) {
        this._createDataTab(title);
      }
    }

    _createDataTab (title) {
      let data = {};
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

    _onPickTab (target) {
      this._indexDisplayTab = +target.id;
      this._renderMenu(this._indexDisplayTab);
    }

    on (name, callback) {
      this._elem.addEventListener(name, callback);
    }

    trigger (name, data) {
      let widgetEvent = new CustomEvent(name, {
            bubbles: true,
            detail: data
        });

        this._elem.dispatchEvent(widgetEvent);
    }

  }

  window.Tabs = Tabs; //export
})();