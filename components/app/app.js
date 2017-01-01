(function () {
  'use strict';

  let Menu = window.Menu; //import
  let Form = window.Form; //import
  let Tabs = window.Tabs; //import
  let Model = window.Model; //import

  let menuModel = new Model ({
    resources: 'https://components-25771.firebaseio.com/menu.json'
  });

  let menu = new Menu ({
    elem: document.querySelector('.js-menu')
  });


  let tabs = new Tabs ({
    elem: document.querySelector('.js-tabs'),
    renderMenu (index) {
      menu._render(index);
    }
  });

  let form = new Form ({
    elem: document.querySelector('.js-form'),
    submit (item) {
      menu.addList(item);
    }
  });

  menuModel.on('update', (data) => {
    tabs.setData(data);
    menu.setData(data);
    menu._render();
    tabs._render();
  });

  form.on('add', event => {
    menu.addList(event.detail); // обновляю интерфейс

    menuModel.setData(menu.getData()); // обновляю данные в моделе
    menuModel.save(); // сохраняю изменения на сервере
  });

  tabs.on('add', event => {
    menuModel.setData(menu.getData()); // обновляю данные в моделе
    menuModel.save(); // сохраняю изменения на сервере
  });

  menu.on('remove', event => {
    menuModel.setData(menu.getData()); // обновляю данные в моделе
    menuModel.save(); // сохраняю изменения на сервере
  });

  menuModel.fetch();

  


  window.menu = menu;
  window.tabs = tabs;
  window.form = form;

})();


