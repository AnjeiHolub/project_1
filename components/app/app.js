(function () {
  'use strict';

  let Menu = window.Menu; //import
  let Form = window.Form; //import
  let Tabs = window.Tabs; //import

  let xhr = new XMLHttpRequest();

  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4) {
      let data = JSON.parse(xhr.responseText);

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


      window.menu = menu;
      window.tabs = tabs;    
    }
  })

  xhr.open('GET', '../data/data.json', false);
  xhr.send();

  

  /*window.data = [{
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
    }]*/

  

  

  let form = new Form ({
    elem: document.querySelector('.js-form'),
    submit (item) {
      menu.addList(item);
    }
  });

  
  window.form = form;

})();


