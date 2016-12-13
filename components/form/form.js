(function () {
  'use strict';

  class Form {
    constructor ({elem, submit}) {
      this._elem = elem;
      this._submit = submit;
      this._onSubmit = this._onSubmit.bind(this);
      this.render();
      this._eventInit();
    }
    
    render () {
      this._elem.innerHTML = `
      <input class="form__href" type="text">
      <input class="form__anchor" type="text">
      <textarea class="form__details" cols="30" rows="10"></textarea>
      <button class="form__button" type="submit">Добавить</button>
      `;
    }

    _eventInit () {
      this._elem.addEventListener('submit', this._onSubmit);
    }

    _getValueForm (selector) {
      return this._elem.querySelector(selector).value;
    }

    _onSubmit (event) {
      event.preventDefault();
      let item = {};
      item.href = this._getValueForm('.form__href');
      item.anchor = this._getValueForm('.form__anchor');
      item.details = this._getValueForm('.form__details');
      this._submit(item);
    }

  }

  window.Form = Form; //export
})();