(function () {
  'use strict';

  class Menu {
    constructor ({elem, data}) {
      this._elem = elem;
      this._data = data;
      console.log(this._data);
      this._onClick = this._onClick.bind(this);
      this.render();
      this._eventInit();
    }
    
    render () {
      function renderMenuList (data) {
        return data.items.map((item, index) => {
          return `
          <li class="menu__list" data-index="${index}">
          <a href="${item.href}" data-action="pikle">${item.anchor}</a>
          <details data-action="open">${item.details}</details>
          <img class="menu__closeList" src="./components/menu/img/close.png" data-action="close"></img>
          </li>
          `
        }).join('');
      };
      this._elem.innerHTML = `
      <h1 class="menu__title">${this._data.title}</h1>
      ${renderMenuList(this._data)}
      `
    }

    _eventInit () {
    	this._elem.addEventListener('click', this._onClick);
    }

    _onClick (event) {
    	switch (event.target.dataset.action){
        case 'close':
          this._onCloseClick(event);
          break;
        case 'pikle':
          this._onPikleClick(event);
          break;
        default: 
          break;
      }
    }

    _onCloseClick (event) {
      let target = event.target;
      while (target !== this) {
        if (target.classList.contains('menu__list')) break;
        target = target.parentNode;
      }
      if (!target.classList.contains('menu__list')) return;
      this._data.items = this._data.items.filter((item, index) => {
        return target.dataset.index != index;
      });
      this.render();
    }

    _onPikleClick (event) {
      event.preventDefault();
    }
  }
  
  window.Menu = Menu; //export
})();