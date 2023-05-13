class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event;
    event.preventDefault(); //não permiti redirecionamento da página

    window.history.pushState({}, '', event.target.href);

    this.handle();
  }

  handle() {
    // toda função dentro de uma classe é chamada de método
    // toda variável dentro de uma classe é chamada de atributo
    // const pathname = window.location.pathname
    // desctruction
    // const { pathname, href, origin, host, port } = window.location;
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];

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
}

export default new Router()

// se a exportação tiver paramentro então exporta na criação da classe
// e não no final, e faz o new Router() lá no index.js
// no router.js:   export class Router {...}
// no index.js:  import { Router } from './router.js'
//               const router = new Router()
//               router.add('/', '/pages/home.html')
// ...
//               router.handle();
//               window.onpopstate = () => router.handle();
//               window.route = () => router.route();