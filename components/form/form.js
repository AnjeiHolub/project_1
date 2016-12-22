(function () {
  'use strict';

  //import

  let formTmpl = window.formTmpl;

  class Form {
    constructor ({elem, submit}) {
      this._elem = elem;
      this._submit = submit;
      this._formTmpl = formTmpl;
      this._onSubmit = this._onSubmit.bind(this);
      this.render();
      this._form = this._elem.querySelector('form');
      this._eventInit();
    }
    
    render () {
      this._elem.innerHTML = this._formTmpl();
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
      this._form.reset();
      this._submit(item);

    }

  }

  window.Form = Form; //export
})();