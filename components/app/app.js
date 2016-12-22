(function () {
  'use strict';


  let Menu = window.Menu; //import
  let Form = window.Form; //import
  let Tabs = window.Tabs; //import

  window.data = [{
      title: 'SPA',
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
    },
    {
      title: 'Книги',
      items: [
        {
          href: 'gamil.com',
          anchor: 'Путь мирного воина',
          details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem commodi omnis officia adipisci sunt dolore, nam sequi debitis quasi nesciunt obcaecati officiis labore veniam cum voluptatibus eum, assumenda, explicabo neque.'
        },
        {
          href: 'google.com',
          anchor: '7 навыков высокоэффективных людей',
          details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel incidunt, praesentium architecto enim rem quisquam animi aperiam voluptates libero voluptatem quibusdam quod nam laboriosam. Ipsum cum, consequatur blanditiis at velit?'
        }
      ]
    }]

  let menu = new Menu ({
    elem: document.querySelector('.js-menu'),
    data: window.data
  });

  let tabs = new Tabs ({
    elem: document.querySelector('.js-tabs'),
    data: window.data,
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

})();


