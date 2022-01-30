"use strict";
var Router = (function () {
    function Router(name, routes) {
        (this.name = name), (this.routes = routes);
    }
    return Router;
}());
var router = new Router('kanbanRouter', [
    {
        path: '/',
        name: 'Login',
    },
    {
        path: '/board',
        name: 'Board',
    },
]);
//# sourceMappingURL=Router.js.map