class Router {
  constructor(name, routes) {
    (this.name = name), (this.routes = routes);
  }
}

const router = new Router('kanbanRouter', [
  {
    path: '/login/login.html',
    name: 'Login',
  },
  {
    path: '/login/login.html/board',
    name: 'Board',
  },
]);

console.log(router);
let currentPath = window.location.pathname;
console.log(currentPath);
if (currentPath === '/login/login.html/board') {
  document.getElementById('root').innerHTML = '<h1>Hello there</h1>';
}
