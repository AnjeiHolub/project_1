(function () {
  'use strict';

  let Menu = window.Menu; //import
  let Form = window.Form; //import
  let Tabs = window.Tabs; //import

  fetch('../data/data.json').then((resp) => {
    resp.json().then((dataBase) => {
      let data = dataBase;

      let menu = new Menu ({
        elem: document.querySelector('.js-menu'),
        data: data
      });


      let tabs = new Tabs ({
        elem: document.querySelector('.js-tabs'),
        data: data,
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


      window.menu = menu;
      window.tabs = tabs;
      window.form = form;
    })
  })

  /*let xhr = new XMLHttpRequest();

  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4) {
      let data = JSON.parse(xhr.responseText);

         
    }
  })

  xhr.open('GET', '../data/data.json', false);
  xhr.send();*/


  

  
  

})();


