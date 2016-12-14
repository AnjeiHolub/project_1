(function () {
  'use strict';

  class Menu {
    constructor ({elem, data}) {
      this._elem = elem;
      this._data = data;
      this.addList = this.addList.bind(this);
      this._onClick = this._onClick.bind(this);
      this.render();
      this._eventInit();
    }
    
    render () {
      function renderMenuList (data) {
        return data.items.map((item, index) => {
          return `<li class="menu__item" data-index="${index}">
                    <a href="${item.href}" data-action="pick">${item.anchor}</a>
                    <details data-action="open"><summary>Описание</summary>${item.details}</details>
                    <img class="menu__closeList" src="./components/menu/img/close.png" data-action="close"></img>
                  </li>`;
        }).join('');
      };
      this._elem.innerHTML = `<h1 class="menu__title">${this._data.title}</h1>
                              ${renderMenuList(this._data)}`;
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
      this._data.items.push(item);
      this.render();
    }

    removeList (target) {
      this._data.items = this._data.items.filter((item, index) => {
        return target.dataset.index != index;
      });
      this.render();
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