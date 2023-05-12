// object literal
const routes = {
  '/': '/pages/home.html',
  '/about': '/pages/about.html',
  '/contact': '/pages/contact.html',
  404: '/pages/404.html'
};

// console.log(routes["/about"])

function route(event) {
  event = event || window.event;
  event.preventDefault(); //não permiti redirecionamento da página

  window.history.pushState({}, '', event.target.href);

  handle();
}

function handle() {
  // const pathname = window.location.pathname
  const { pathname, href, origin, host, port } = window.location; // desctruction
  const route = routes[pathname] || routes[404];

  // o fetch é uma API assincrona, será executada de forma sincrona(na sequência normal),
  // porém sua ação interna(.then) só será executada após
  // console.log("antes do fetch")
  // fetch(route).then(data => {
  //   console.log(data)
  // })
  // console.log("depois do fetch")

  fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html;
    });

  // console.log(pathname, href, origin, host, port)
  // console.log(route)
}

handle();

// 'on' funciona da mesma forma do addEventListener
// é p aplicar uma ação a navegação do browser (setas anterior e próxoma páginas)
window.onpopstate = () => handle();
window.route = () => route()

// a linha de código abaixo foi substituida pelo onclick na tag a
// document.querySelector('nav a:nth-child(1)').addEventListener('click', () => {})
