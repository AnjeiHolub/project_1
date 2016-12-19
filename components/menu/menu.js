(function () {
  'use strict';

  //import

  let menuTmpl = window.menuTmpl;

  class Menu {
    /**
     * Create a Menu.
     * @param {Object} elem
     * @param {Array} data
     */
    constructor ({elem, data}) {
      this._elem = elem;
      this._data = data;
<<<<<<< HEAD
=======
      this._indexDisplayData = 0;
>>>>>>> df04b42b54a8fe68e3604d53a43ae6514ce7c506
      this.menuTmpl = menuTmpl;
      this.addList = this.addList.bind(this);
      this._onClick = this._onClick.bind(this);
      this._render();
      this._eventInit();
    }
    
<<<<<<< HEAD
    _render () {
      this._elem.innerHTML = this.menuTmpl(this._data);
      /*function renderMenuList (data) {
        return data.items.map((item, index) => {
          return `<li class="menu__item" data-index="${index}">
                    <a href="${item.href}" data-action="pick">${item.anchor}</a>
                    <details data-action="open"><summary>Описание</summary>${item.details}</details>
                    <img class="menu__closeList" src="./components/menu/img/close.png" data-action="close"></img>
                  </li>`;
        }).join('');
      };
      this._elem.innerHTML = `<h1 class="menu__title">${this._data.title}</h1>
                              ${renderMenuList(this._data)}`;*/
=======
    _render (index) {
      if (index !== undefined) this._indexDisplayData = index;
      this._elem.innerHTML = this.menuTmpl(this._data[this._indexDisplayData]);
>>>>>>> df04b42b54a8fe68e3604d53a43ae6514ce7c506
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
<<<<<<< HEAD
      this._data.items.push(item);
=======
      this._data[this._indexDisplayData].items.push(item);
>>>>>>> df04b42b54a8fe68e3604d53a43ae6514ce7c506
      this._render();
    }

    removeList (target) {
      this._data[this._indexDisplayData].items = this._data[this._indexDisplayData].items.filter((item, index) => {
        return target.dataset.index != index;
      });
      this._render();
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
  
  window.Menu = Menu; //export
})();