(function () {
  'use strict';


  let Menu = window.Menu; //import

  new Menu ({
    elem: document.querySelector('.menu'),
    data: {
      title: 'Single page application',
      items: [{
        href: 'gamil.com',
        anchor: 'Почта',
        details: 'Почта Gmail'
      },
      {
        href: 'google.com',
        anchor: 'Поисковик',
        details: 'Поисковик Google'
      }]
    }
  });

})();


