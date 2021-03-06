
  "use strict";

  let menuTmpl = window.menuTmpl;

  class Menu {
    /**
     * Create a Menu.
     * @param {Object} elem
     * @param {Array} data
     */
    constructor ({elem, data = [{items: [], title: 'Пробная закладка'}]}) {
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
    
    setData (data) {
      this._data = data;
    }

    getData () {
      return this._data;
    }

    _render (index) {
      if (index !== undefined) this._indexDisplayData = index;
      this._elem.innerHTML = this.menuTmpl(this._data[this._indexDisplayData]);
    }

    _eventInit () {
    	this._elem.addEventListener('click', this._onClick);
    }

    _onClick (event) {
    	switch (event.target.dataset.action){
        case 'close':
          this._onCloseClick(event);
          break;
        case 'pick':
          this._onPickClick(event);
          break;
      }
    }

    addList (item) {
      if (this._data[this._indexDisplayData].items === undefined) this._data[this._indexDisplayData].items = [];
      this._data[this._indexDisplayData].items.push(item);
      this._render();
    }

    removeList (target) {
      this._data[this._indexDisplayData].items = this._data[this._indexDisplayData].items.filter((item, index) => {
        return target.dataset.index != index;
      });
      this.trigger('remove', this._data);
      this._render();
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

    _onCloseClick (event) {
      let target = event.target;
      while (target !== this) {
        if (target.classList.contains('menu__item')) break;
        target = target.parentNode;
      }
      if (!target.classList.contains('menu__item')) return;
      this.removeList(target);
    }

    _onPickClick (event) {
      event.preventDefault();
    }

  }
  
  export {Menu};
