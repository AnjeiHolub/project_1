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
      this._elem.innerHTML = `<h1 class="form__title">Добавить позицию</h1>
                              <input name="url" class="form__input" placeholder="url" type="text">
                              <input name="anchor" class="form__input" placeholder="anchor" type="text">
                              <textarea name="details" class="form__input" placeholder="details" rows="5"></textarea>
                              <button class="form__button" type="submit">Добавить</button>`;
    }

    _eventInit () {
      this._elem.addEventListener('submit', this._onSubmit);
    }

    _getValueForm (name) {
      return this._elem.querySelector(`[name=${name}`).value;
    }

    _onSubmit (event) {
      event.preventDefault();
      let item = {};
      item.href = this._getValueForm('url');
      item.anchor = this._getValueForm('anchor');
      item.details = this._getValueForm('details');
      this._elem.reset();
      this._submit(item);

    }

  }

  window.Form = Form; //export
})();