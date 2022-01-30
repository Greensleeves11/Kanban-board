var View = (function () {
    function View() {
        var _this = this;
        this.template = '';
        this.render = function (element, position) {
            element.insertAdjacentHTML(position, _this.template);
        };
    }
    return View;
}());
export { View };
//# sourceMappingURL=View.js.map