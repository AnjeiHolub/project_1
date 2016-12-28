(function () {
  'use strict';

  

  class Model {
    constructor ({resources = '../data/data.json'}) {
      this._resources = resources;
      this._handlers = {};
      console.log(this._resources)
    }

    setData (data) {
      this._data = data;
      this.trigger('update', this._data);
    }

    getData () {
      return this._data;
    }

    save () {
      this._makeRequest('PUT', this._resources);
    }

    fetch () {
      this._makeRequest('GET', this._resources);
    }

    on (name, cb) {
      if (!this._handlers[name]) {
        this._handlers[name] = [];
      }

      this._handlers[name].push(cb);

    }

    trigger (name, data) {
      if (this._handlers[name]) {
        this._handlers[name].forEach(callback => callback(data));
      }
    }

    _makeRequest (method, resources) {
      let xhr = new XMLHttpRequest();
      xhr.open(method, resources, false);
      console.log(xhr);


      xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4) {
          let data = JSON.parse(xhr.responseText);

          if (method === 'GET') {
            this.trigger('fetch', xhr);
            this.setData(data);
          }
        }
      })

      if (method === 'PUT') {
        xhr.send(JSON.stringify(this._data));
      } else {
        xhr.send();
      }
      
      xhr.send();
    }
  }

  window.Model = Model; //export
})();