(function () {
  'use strict';

  class Menu {
    constructor ({elem}) {
      this._elem = elem;
      this._onClick = this._onClick.bind(this);
      this._eventInit();
    }
    
    _eventInit () {
    	this._elem.addEventListener('click', this._onClick);
    }

    _onClick (event) {
    	let target = event.target;
    	if (target.classList.contains('menu__closeList')) {
        this._onCloseClick(target);
      };
    }

    _onCloseClick (target) {
      while (target !== this) {
        if (target.classList.contains('menu__list')) break;
        target = target.parentNode;
      }
      if (!target.classList.contains('menu__list')) return;

      target.parentNode.removeChild(target);

    }
  }
  
  window.Menu = Menu; //export
})();