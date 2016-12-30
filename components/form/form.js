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


      this.trigger('add', {
        href: this._getValueForm('url'),
        anchor: this._getValueForm('anchor'),
        details: this._getValueForm('details')
      });

      this._form.reset();

    }

    on (name, callback) {
      this._elem.addEventListener(name, callback);
    }


    /**
     * Создаем и диспатчим событие
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    trigger (name, data) {
      let widgetEvent = new CustomEvent(name, {
            bubbles: true,
            detail: data
        });

        this._elem.dispatchEvent(widgetEvent);
    }

  }

  window.Form = Form; //export
})();