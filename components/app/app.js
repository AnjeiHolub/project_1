(function () {
  'use strict';


  let Menu = window.Menu; //import
  let Form = window.Form; //import

  let menu = new Menu ({
    elem: document.querySelector('.menu'),
    data: {
      title: 'Single page application',
      items: [
        {
          href: 'gamil.com',
          anchor: 'Почта',
          details: 'Почта Gmail'
        },
        {
          href: 'google.com',
          anchor: 'Поисковик',
          details: 'Поисковик Google'
        }
      ]
    }
  });

  let form = new Form ({
    elem: document.querySelector('.form'),
    submit (item) {
      menu.addList(item);
    }
  })

  window.menu = menu;
  window.form = form;

})();


