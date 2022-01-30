import '../style.css';
import '../img/cancel.png';
var root = document.getElementById('root');
var Router = (function () {
    function Router(name, routes) {
        (this.name = name), (this.routes = routes);
    }
    return Router;
}());
var router = new Router('kanbanRouter', [
    {
        path: '/',
        name: 'Root',
    },
    {
        path: '/login',
        name: 'Login',
    },
    {
        path: '/board',
        name: 'Board',
    },
]);
var currentPath = window.location.pathname;
if (currentPath === '/') {
    root.innerHTML = 'You are on home page';
}
else {
    var route = router.routes.filter(function (r) { return r.path === currentPath[0]; });
    if (route) {
        root.innerHTML = "You are on the ".concat(route.name, " path");
    }
    else {
        root.innerHTML = "This route is not defined";
    }
}
//# sourceMappingURL=main.js.map