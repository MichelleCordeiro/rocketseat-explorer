import Router from './router.js'

// const router = new Router()

// object literal substituito por classe-poo
// const routes = {
//   '/': '/pages/home.html',
//   '/about': '/pages/about.html',
//   '/contact': '/pages/contact.html',
//   404: '/pages/404.html'
// }; 

Router.add('/', '/pages/home.html')
Router.add('/about', '/pages/about.html')
Router.add('/contact', '/pages/contact.html')
Router.add(404, '/pages/404.html')

// console.log(routes["/about"])

Router.handle();

// 'on' funciona da mesma forma do addEventListener
// onpopstate p aplicar uma ação na navegação do browser (setas anterior e próxima pag)
window.onpopstate = () => Router.handle()
window.route = () => Router.route()

// a linha de código abaixo foi substituida pelo onclick na tag 'a'
// document.querySelector('nav a:nth-child(1)').addEventListener('click', () => {})
