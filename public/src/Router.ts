interface Router {
  name: string;
  routes: {}[];
}

class Router {
  constructor(name: string, routes: {}[]) {
    (this.name = name), (this.routes = routes);
  }
}

const router = new Router('kanbanRouter', [
  {
    path: '/',
    name: 'Login',
  },
  {
    path: '/board',
    name: 'Board',
  },
]);
